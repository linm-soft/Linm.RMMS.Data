<?php

class Sdb_infrastructures_history_import_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
    }

    function add_infrastructures_history_import($params)
    {
        $this->db->insert('sdb_infrastructures_history_import',$params);
        return $this->db->insert_id();
    }
    function update_infrastructures_history_import($params,$infrastructures_history_import_id)
    {
        $this->db->where(['infrastructures_history_import_id' => $infrastructures_history_import_id]);
        return $this->db->update('sdb_infrastructures_history_import',$params);
        
    }
    
    function get_all_infrastructures_history_import($params)
    {  
        $this->db->join('sdb_user','sdb_user.user_id = sdb_infrastructures_history_import.user_id');
        $this->db->order_by('infrastructures_category_id', 'desc');
        if (isset($params) && !empty($params)) {
            $this->db->limit($params['limit'], $params['offset']);
        }
        $this->db->order_by('infrastructures_history_import_id','DESC');
        $this->db->select('sdb_infrastructures_history_import.*,sdb_user.user_name, sdb_user.user_fullname');
        return $this->db->get('sdb_infrastructures_history_import')->result_array();
    }


}
