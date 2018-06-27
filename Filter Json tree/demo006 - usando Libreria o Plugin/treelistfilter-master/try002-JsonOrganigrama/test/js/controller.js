var app = angular.module("myApp",[]);
app.controller("myController",function($scope,$http){
	function getData(){
		   	 console.log('procesing...')
			// $http.get('./json/organigrama.json').then(function (data) {
			//    	 $scope.organigrama = data;
			//    	 console.log(data)
			//    });

			 // $http.get("./json/organigrama.json")
    //         .success(function (data) {
    //            console.log(data);
    //         })
    //         .error(function (data) {
    //             console.log("there was an error"+data);
    //         });

    	$scope.organigrama = 

    	[
				{
					nombre:'FSW'
					,id:2313
					,Cargos:[{
  					  info:{	idCargo:23123
  				 			  ,nombreCargo:'Cargo-0'
  					    }
  					 ,colaboradores:[
					 			{idColab:1312,nombreColab:'martin dq'}
					 			,{idColab:3122,nombreColab:'Jose dq'}
				 			]
					},
					{
  					  info:{	idCargo:3111
  				 			  ,nombreCargo:'Cargo-0-1'
  					    }
  					 ,colaboradores:[
					 			{idColab:31233,nombreColab:'Snatos dq'}
				 			]
					}
					]
					,Subareas:[
					    {
					      info: {nAreaId:34123,nombre:'sub area'}
					      ,cargo:[]
					      ,Subareas:[]
					    }
					  ]
				}
				,{nombre:'gerencia'
				 ,id:2233
				 ,Cargos: [
				 	{
				 		info: {
				 			idCargo:23123
				 			,nombreCargo:'Cargo-1'
				 		}
				 		,colaboradores:[
					 			{idColab:31233,nombreColab:'martin dq'}
					 			,{idColab:31233,nombreColab:'Meramendi dq'}
				 			]

				 	}
				 	,{
				 		info: {
				 			idCargo:23123
				 			,nombreCargo:'Cargo-2'
				 		}
				 		,colaboradores:[
					 			{idColab:31233,nombreColab:'Peralta dq'}
					 			,{idColab:31233,nombreColab:'Quinto dq'}
				 			]

				 	}
				 ]
				 	
				 ,Subareas:[
				 	{
				 		Cargos:[]
				 		,Subareas:[
				 			{
				 				info:{nAreaId:12323,nombre:'Sub area Nivel 3 x222 @'}
				 				,Cargos:[
				 					{
				 						info:{idCargo:23123,nombreCargo:'cargo nivel 3'}
				 						,colaboradores:[
				 							{idColab:312312, nombreColab:'Pizarro j C.'}
				 							,{idColab:31312, nombreColab:'Mandamiento Q M.'}
				 						]
				 					}
				 				]
				 				,Subareas:[]
				 			}
				 		]
				 		,info:{id:3123,nombre:'finanzas 333'}
				 	}
				 ]
				}
	]


    	//end function
	}
	getData();
	
});
