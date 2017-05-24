module.exports=function(shipit,config){



    //前端一步到位的发布前端
    shipit.task('all',function(){
            shipit.start('all_build');
    });

    //编译生成到deploypath
    shipit.blTask('all_build', function () {
        let branch=shipit.branch
	
       shipit.local(`cd ${config.buildpath} && git checkout ${branch} && npm run build`).then(function(res){
           /*if(res.stderr!=''){
               console.log("##############1.build failed ##############")
               console.log(res.stderr)
               return;
           }*/
            shipit.start('all_push');
       });

    });

    shipit.blTask('all_push', function () {


       shipit.local(`cd ${config.deploypath} && git pull && git add --all && git commit -m "update"&& git push`).then(function(res){
           if(res.stderr!=''){
               var patt1 = new RegExp("warning");
               var result = patt1.test(res.stderr);

               if(result){

               } else {
                   console.log("##############2.push failed ##############")
                   console.log(res.stderr)
                   return;
               }
           }
            shipit.start('all_deploy');
       });



    });

    shipit.blTask('all_deploy', function () {
        shipit.start('deploy');
    });

}
