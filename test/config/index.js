module.exports=function(shipit,config){
      

    let workspace='/tmp/deploy/workplace/stat_frontend'
    let deploypath='/data1/www/stat/stat_frontend'
    let base = {
        workspace:workspace,
        deployTo: deploypath,
        repositoryUrl: 'git@git.tuzuu.com:statistics/stat_frontend.git',
        ignores: ['.git'],
        rsync: ['--delete-after'],//rsync参数
        keepReleases: 4,
        //key: 'C:/Users/DEV-Z/.ssh'
        deleteOnRollback: false,
    };

     
    shipit.initConfig({   
      test:Object.assign(
        {
            servers: config.server.testme
        },base),


    
	
  });


    //事件
    config.workspace=workspace
    config.deploypath=deploypath
    config.buildpath='/data1/www/stat'

    require('./task.js')(shipit,config);

};
