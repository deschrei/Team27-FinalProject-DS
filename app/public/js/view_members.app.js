var app = new Vue({
  el: '#members',
  data:{
    memberList: [],
    activeMember: {},
    positionList: [],
    newMember: {},
    membercertification: [],
    certificationList: []
  },

  created(){
    this.fetchMember();
    this.fetchPosition();
    this.fetchCertification();

  },

  methods: {

    fetchCertification: function(){
      fetch('api/records/view_certifications.php')
      .then(response => response.json())
      .then(data => {
        this.certificationList = data;
        console.log(data);


      });
    },

    fetchMemberCertification(){
      fetch('api/records/view_member_certifications.php',{
        method: 'POST',
        body: JSON.stringify(this.activeMember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

      .then(response => response.json())
      .then(data => {
        this.membercertification = data;
        console.log(data);

      });
      console.log("creating (POSTing)...!");
      console.log(this.activeMember);
    },


    editMember(){
      fetch('api/records/edit_member.php',{
        method: 'POST',
        body: JSON.stringify(this.activeMember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

      console.log("creating (POSTing)...!");
      console.log(this.activeMember);
    },



    newMemberData(){
      return {
        firstName: ""
      }
    },


    createMember(){
      fetch('api/records/update_members.php',{
        method: 'POST',
        body: JSON.stringify(this.newMember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

      console.log("creating (POSTing)...!");
      console.log(this.newMember);
    },






    fetchPosition: function(){
      fetch('api/records/view_positions.php')
      .then(response => response.json())
      .then(data => {
        this.positionList = data;
        console.log(data);


      });
    },



    deleteMember(){
      fetch('api/records/delete_member.php',{
        method: 'POST',
        body: JSON.stringify(this.activeMember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

      console.log("creating (POSTing)...!");
      console.log(this.activeMember);
    },

    fetchMember: function(){
      fetch('api/records/view_members.php')
      .then(response => response.json())
      .then(data => {
        this.memberList = data;
        console.log(data);



      });
    }
  }


})
