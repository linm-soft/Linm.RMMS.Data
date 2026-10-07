<?php
 
class Sdb_user_distance_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
    }
    
    function get_user_distance($user_id)
    {
        return $this->db->get_where('sdb_user_distance',array('user_id'=>$user_id))->row_array();
    }
        
    function get_all_sdb_user_distance()
    {
        $this->db->order_by('user_id', 'desc');
        return $this->db->get('sdb_user_distance')->result_array();
    }
        
    function add_sdb_user_distance($params)
    {
        $this->db->insert('sdb_user_distance',$params);
        return $this->db->insert_id();
    }
    
    function update_sdb_user_distance($user_id,$params)
    {
        $this->db->where('user_id',$user_id);
        return $this->db->update('sdb_user_distance',$params);
    }
    



}
