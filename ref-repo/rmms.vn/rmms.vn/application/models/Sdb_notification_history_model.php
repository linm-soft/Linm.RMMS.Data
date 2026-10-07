<?php

class Sdb_notification_history_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
    }
    

    function get_sdb_notification_history($notification_history_id)
    {
        return $this->db->get_where('sdb_notification_history',array('notification_history_id'=>$notification_history_id))->row_array();
    }
    

    function get_all_sdb_notification_history_count()
    {
        $this->db->from('sdb_notification_history');
        return $this->db->count_all_results();
    }

    function get_all_sdb_notification_history($params = array())
    {
        $this->db->order_by('notification_history_id', 'desc');
        if(isset($params) && !empty($params))
        {
            $this->db->limit($params['limit'], $params['offset']);
        }
        return $this->db->get('sdb_notification_history')->result_array();
    }
        
    function add_sdb_notification_history($params)
    {
        $this->db->insert('sdb_notification_history',$params);
        return $this->db->insert_id();
    }
    

    function update_sdb_notification_history($notification_history_id,$params)
    {
        $this->db->where('notification_history_id',$notification_history_id);
        return $this->db->update('sdb_notification_history',$params);
    }
    

    function delete_sdb_notification_history($notification_history_id)
    {
        return $this->db->delete('sdb_notification_history',array('notification_history_id'=>$notification_history_id));
    }
}
