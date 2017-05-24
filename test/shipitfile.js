module.exports = function (shipit,project) {
  require('shipit-deploy')(shipit);
  
    let config={//公用的参数
	server:{
	    
	    testme:'root@192.168.1.38'
	}
    }

    require(`./config/${project}`)(shipit,config);

    
};
