<?php
 
class Sdb_admin_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
    }
    
    function get_sdb_admin($user_id)
    {
        return $this->db->get_where('sdb_admin',array('user_id'=>$user_id))->row_array();
    }
        
    function get_all_sdb_admin()
    {
        $this->db->order_by('user_id', 'desc');
        return $this->db->get('sdb_admin')->result_array();
    }
        
    function add_sdb_admin($params)
    {
        $this->db->insert('sdb_admin',$params);
        return $this->db->insert_id();
    }
    
    function update_sdb_admin($user_id,$params)
    {
        $this->db->where('user_id',$user_id);
        return $this->db->update('sdb_admin',$params);
    }
    

    function delete_sdb_admin($user_id)
    {
        return $this->db->delete('sdb_admin',array('user_id'=>$user_id));
    }

    function login_admin($params)
    {
        return $this->db->get_where('sdb_admin',$params)->row_array();
    }

}
