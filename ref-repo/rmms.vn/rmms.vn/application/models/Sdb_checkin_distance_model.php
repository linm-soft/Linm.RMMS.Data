<?php


class Sdb_checkin_distance_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
    }

    function get_all_sdb_checkin_distance_by_history($user_group_id = 0)
    {
        $this->db->from('sdb_c_distance_c_checkin');
        $this->db->join('sdb_c_distance_u_group','sdb_c_distance_u_group.checkin_distance_id = sdb_c_distance_c_checkin.checkin_distance_id','right');

        $this->db->join('sdb_checkin_history sch',
            'sch.c_distance_c_checkin_id = sdb_c_distance_c_checkin.c_distance_c_checkin_id 
            AND sch.checkin_distance_id = sdb_c_distance_c_checkin.checkin_distance_id 
            ','left');
        $this->db->join('sdb_checkin_status','sdb_checkin_status.checkin_status_id = sch.checkin_status_id','left');
        $this->db->join('sdb_user_group','sdb_user_group.user_group_id = sdb_c_distance_u_group.user_group_id');
        $this->db->join('sdb_checkin_distance','sdb_checkin_distance.checkin_distance_id = sdb_c_distance_c_checkin.checkin_distance_id');

        $this->db->where(['sdb_c_distance_u_group.user_group_id'=>$user_group_id]);

        $this->db->select('sdb_c_distance_u_group.c_distance_u_group_id,sdb_c_distance_c_checkin.c_distance_c_checkin_id as c_distance_c_checkin_id,  sdb_checkin_distance.checkin_distance_id, sdb_checkin_status.checkin_status_id, checkin_status_name, user_group_name, c_distance_c_checkin_location, c_distance_c_checkin_lat, c_distance_c_checkin_long');
        $this->db->group_by('sdb_c_distance_c_checkin.c_distance_c_checkin_id');
        return $this->db->get()->result_array();
    }

    function list_checkin_by_distance_get($user_group_id = 0, $checkin_distance_id)
    {
        $this->db->from('sdb_c_distance_c_checkin');
        $this->db->join('sdb_c_distance_u_group','sdb_c_distance_u_group.checkin_distance_id = sdb_c_distance_c_checkin.checkin_distance_id','right');

        $this->db->join('sdb_checkin_history sch',
            'sch.c_distance_c_checkin_id = sdb_c_distance_c_checkin.c_distance_c_checkin_id 
            AND sch.checkin_distance_id = sdb_c_distance_c_checkin.checkin_distance_id 
            ','left');
        $this->db->join('sdb_checkin_status','sdb_checkin_status.checkin_status_id = sch.checkin_status_id','left');
        $this->db->join('sdb_user_group','sdb_user_group.user_group_id = sdb_c_distance_u_group.user_group_id');
        $this->db->join('sdb_checkin_distance','sdb_checkin_distance.checkin_distance_id = sdb_c_distance_c_checkin.checkin_distance_id');

        $this->db->where(['sdb_c_distance_u_group.user_group_id'=>$user_group_id,
            'sdb_c_distance_c_checkin.checkin_distance_id'=>$checkin_distance_id
        ]);

        $this->db->select('*,sdb_c_distance_u_group.c_distance_u_group_id,
            sdb_c_distance_c_checkin.c_distance_c_checkin_id as c_distance_c_checkin_id,
            sdb_checkin_distance.checkin_distance_id,
            sch.checkin_status_id, checkin_status_name,
            user_group_name, c_distance_c_checkin_location,
            c_distance_c_checkin_lat,
            c_distance_c_checkin_long,

            ');

        $this->db->group_by('sdb_c_distance_c_checkin.c_distance_c_checkin_id');
        $this->db->order_by('sch.checkin_history_id', 'DESC');
        return $this->db->get()->result_array();
    }




    function get_all_sdb_checkin_distance_by_id($checkin_distance_id = 0,$params = array())
    {
        $this->db->from('sdb_c_distance_c_checkin');
        $this->db->join('sdb_c_distance_u_group','sdb_c_distance_u_group.checkin_distance_id = sdb_c_distance_c_checkin.checkin_distance_id','right');

        $this->db->join('sdb_checkin_history sch',
            'sch.c_distance_c_checkin_id = sdb_c_distance_c_checkin.c_distance_c_checkin_id 
            AND sch.checkin_distance_id = sdb_c_distance_c_checkin.checkin_distance_id 
            ','left');
        $this->db->join('sdb_checkin_status','sdb_checkin_status.checkin_status_id = sch.checkin_status_id','left');
        $this->db->join('sdb_user_group','sdb_user_group.user_group_id = sdb_c_distance_u_group.user_group_id');
        $this->db->join('sdb_user','sdb_user.user_id = sch.user_id');
        $this->db->join('sdb_checkin_distance','sdb_checkin_distance.checkin_distance_id = sdb_c_distance_c_checkin.checkin_distance_id');

        $this->db->where([
            'sdb_c_distance_c_checkin.checkin_distance_id'=>$checkin_distance_id
        ]);

        $this->db->select('sdb_c_distance_u_group.c_distance_u_group_id,sdb_c_distance_c_checkin.c_distance_c_checkin_id as c_distance_c_checkin_id,  sdb_checkin_distance.checkin_distance_id, sdb_checkin_status.checkin_status_id, checkin_status_name, user_group_name, c_distance_c_checkin_location, c_distance_c_checkin_lat, c_distance_c_checkin_long,checkin_history_img,checkin_history_img_thumb
            ,checkin_history_create_date
            ,user_fullname
            ,user_avatar
            ,checkin_distance_name
            ,c_distance_c_checkin_location
            ');
        $this->db->group_by('sdb_c_distance_c_checkin.c_distance_c_checkin_id');
        return $this->db->get()->result_array();
    }

       /*
     * function to add new sdb_checkin_distance
     */
       function get_point_by_id($checkin_distance_id)
       {
         $this->db->from('sdb_c_distance_c_checkin');
         $this->db->join('sdb_checkin_distance','sdb_checkin_distance.checkin_distance_id = sdb_c_distance_c_checkin.checkin_distance_id');
         $this->db->where(array('sdb_c_distance_c_checkin.checkin_distance_id'=>$checkin_distance_id));
         return $this->db->get()->result_array();
     }



    /*
     * Get sdb_checkin_distance by checkin_distance_id
     */
    function get_sdb_checkin_distance($checkin_distance_id)
    {
        return $this->db->get_where('sdb_checkin_distance',array('checkin_distance_id'=>$checkin_distance_id))->row_array();
    }
    
    /*
     * Get all sdb_checkin_distance count
     */
    function get_all_sdb_checkin_distance_count()
    {
        $this->db->from('sdb_checkin_distance');
        return $this->db->count_all_results();
    }

    /*
     * Get all sdb_checkin_distance
     */
    function get_all_sdb_checkin_distance($params = array(), $array_where = [])
    {
        $this->db->from('sdb_checkin_distance');
        $this->db->join('sdb_location','sdb_location.location_id = sdb_checkin_distance.location_id');
        // $this->db->join('sdb_c_distance_u_group','sdb_c_distance_u_group.checkin_distance_id = sdb_checkin_distance.checkin_distance_id');
        // $this->db->join('sdb_user_group','sdb_user_group.user_group_id = sdb_c_distance_u_group.user_group_id');
        // $this->db->join('sdb_distance','sdb_distance.distance_id = sdb_checkin_distance.distance_id');
        
        // $this->db->where($array_where);
        if(isset($params) && !empty($params))
        {
            $this->db->limit($params['limit'], $params['offset']);
        }
        return $this->db->get()->result_array();
    }

    function get_all_sdb_checkin_distance_by_distance($distance_id)
    {
        $this->db->from('sdb_checkin_distance');
        $this->db->join('sdb_location','sdb_location.location_id = sdb_checkin_distance.location_id');
        
        $this->db->where(['sdb_checkin_distance.distance_id'=>$distance_id]);
        
        return $this->db->get()->result_array();
    }

    /*
     * function to add new sdb_checkin_distance
     */
    function add_sdb_checkin_distance($params)
    {
        $this->db->insert('sdb_checkin_distance',$params);
        return $this->db->insert_id();
    }
    
    /*
     * function to update sdb_checkin_distance
     */
    function update_sdb_checkin_distance($checkin_distance_id,$params)
    {
        $this->db->where('checkin_distance_id',$checkin_distance_id);
        return $this->db->update('sdb_checkin_distance',$params);
    }
    
    /*
     * function to delete sdb_checkin_distance
     */
    function delete_sdb_checkin_distance($checkin_distance_id)
    {
        return $this->db->delete('sdb_checkin_distance',array('checkin_distance_id'=>$checkin_distance_id));
    }


    function get_all_sdb_checkin_distance_by_where($params = array(), $array_where = [])
    {
        $this->db->from('sdb_checkin_distance');
        $this->db->join('sdb_location','sdb_location.location_id = sdb_checkin_distance.location_id');
        $this->db->join('sdb_c_distance_u_group','sdb_c_distance_u_group.checkin_distance_id = sdb_checkin_distance.checkin_distance_id');
        $this->db->join('sdb_c_distance_c_checkin','sdb_c_distance_c_checkin.checkin_distance_id = sdb_checkin_distance.checkin_distance_id');

        $this->db->join('sdb_user_group','sdb_user_group.user_group_id = sdb_c_distance_u_group.user_group_id');
        $this->db->join('sdb_distance','sdb_distance.distance_id = sdb_checkin_distance.distance_id');
        $this->db->group_by('sdb_checkin_distance.checkin_distance_id');
        $this->db->where($array_where);
        if(isset($params) && !empty($params))
        {
            $this->db->limit($params['limit'], $params['offset']);
        }
        return $this->db->get()->result_array();
    }

}
