<?php
defined('BASEPATH') or exit('No direct script access allowed');

class MY_DB_mysqli_driver extends CI_DB_mysqli_driver
{

    final public function __construct($params)
    {
      parent::__construct($params);
    }

    public function insert_batch_dup($table, $set = NULL, $escape = NULL, $batch_size = 100)
    {
        if ($set === NULL) {
            if (empty($this->qb_set)) {
                return ($this->db_debug) ? $this->display_error('db_must_use_set') : FALSE;
            }
        } else {
            if (empty($set)) {
                return ($this->db_debug) ? $this->display_error('insert_batch() called with no data') : FALSE;
            }

            $this->set_insert_batch($set, '', $escape);
        }

        if (strlen($table) === 0) {
            if (!isset($this->qb_from[0])) {
                return ($this->db_debug) ? $this->display_error('db_must_set_table') : FALSE;
            }

            $table = $this->qb_from[0];
        }

        // Batch this baby
        $affected_rows = 0;
        for ($i = 0, $total = count($this->qb_set); $i < $total; $i += $batch_size) {
            if ($this->query($this->_insert_batch_dup($this->protect_identifiers($table, TRUE, $escape, FALSE), $this->qb_keys, array_slice($this->qb_set, $i, $batch_size)))) {
                $affected_rows += $this->affected_rows();
            }
        }

        $this->_reset_write();
        return $affected_rows;
    }

    protected function _insert_batch_dup($table, $keys, $values)
    {
        foreach($keys as $key)
        $update_fields[] = $key.'=VALUES('.$key.')';

        return "INSERT INTO " . $table . " (" . implode(", ", $keys) . ") VALUES " . implode(', ', $values).
        " ON DUPLICATE KEY UPDATE ".implode(', ', $update_fields);
    }
}
