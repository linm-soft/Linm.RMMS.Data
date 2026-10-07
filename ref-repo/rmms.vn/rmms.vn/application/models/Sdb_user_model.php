<?php

class Sdb_user_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
    }

    function get_all_sdb_user_count()
    {
        $this->db->from('sdb_user');
        return $this->db->count_all_results();
    }
    
    function get_all_sdb_user_from_group($group_id = 0)
    {
        $this->db->from('sdb_user');
        $this->db->join('sdb_user_group','sdb_user_group.user_group_id = sdb_user.user_group_id');
        $this->db->where(['sdb_user.user_group_id'=> $group_id]);
        return $this->db->get()->result_array();
    }
    
    function get_sdb_user($user_id)
    {
        return $this->db->get_where('sdb_user',array('user_id'=>$user_id))->row_array();
    }

    
    function get_all_sdb_user()
    {
        $this->db->from('sdb_user');
        $this->db->join('sdb_user_group','sdb_user_group.user_group_id = sdb_user.user_group_id','left');
        $this->db->join('sdb_user_type','sdb_user_type.user_type_id = sdb_user.user_type_id');
        $this->db->order_by('user_type_level');
        return $this->db->get()->result_array();
    }

    function add_sdb_user($params)
    {
        $this->db->insert('sdb_user',$params);
        return $this->db->insert_id();
    }
    

    function update_sdb_user($user_id,$params)
    {
        $this->db->where('user_id',$user_id);
        return $this->db->update('sdb_user',$params);
    }
    

    function delete_sdb_user($user_id)
    {
        return $this->db->delete('sdb_user',array('user_id'=>$user_id));
    }

    function login($user)
    {
        $rel = $this->db->query(
            "SELECT * FROM sdb_user JOIN  sdb_user_group 
            ON 
            sdb_user.user_group_id = sdb_user_group.user_group_id
            JOIN 
            sdb_user_type
            ON 
            sdb_user.user_type_id = sdb_user_type.user_type_id
            WHERE  
            `user_name` = ? AND `user_pass` = ? AND `user_active` = 1
            ",
            [
                $user['user_name'],
                $user['user_pass'],
            ]);
        if(is_null($rel->row_array())) 
            return FALSE;
        return $rel->row_array();
    }

}
