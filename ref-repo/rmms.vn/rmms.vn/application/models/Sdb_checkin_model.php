<?php

class Sdb_checkin_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
    }
    
    /*
     * Get sdb_checkin by checkin_id
     */
    function get_sdb_checkin($checkin_id)
    {
        return $this->db->get_where('sdb_checkin',array('checkin_id'=>$checkin_id))->row_array();
    }
    
    /*
     * Get all sdb_checkin count
     */
    function get_all_sdb_checkin_count()
    {
        $this->db->from('sdb_checkin');
        return $this->db->count_all_results();
    }
        
    /*
     * Get all sdb_checkin
     */
    function get_all_sdb_checkin($params = array())
    {
        $this->db->order_by('checkin_id', 'desc');
        if(isset($params) && !empty($params))
        {
            $this->db->limit($params['limit'], $params['offset']);
        }
        return $this->db->get('sdb_checkin')->result_array();
    }

        /*
     * Get all sdb_checkin
     */
        
    /*
     * function to add new sdb_checkin
     */
    function add_sdb_checkin($params)
    {
        $this->db->insert('sdb_checkin',$params);
        return $this->db->insert_id();
    }
    
    /*
     * function to update sdb_checkin
     */
    function update_sdb_checkin($checkin_id,$params)
    {
        $this->db->where('checkin_id',$checkin_id);
        return $this->db->update('sdb_checkin',$params);
    }
    
    /*
     * function to delete sdb_checkin
     */
    function delete_sdb_checkin($checkin_id)
    {
        return $this->db->delete('sdb_checkin',array('checkin_id'=>$checkin_id));
    }
}
