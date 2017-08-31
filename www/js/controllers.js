angular.module('app.controllers', [])
  
.controller('menuCtrl', function($scope ,$rootScope) {
    
    var db = openDatabase('fastdelivery', '1.0', 'Test DB', 2 * 1024 * 1024);
    
    $scope.categories   = [];
    
    db.transaction(function(tx){ 
        tx.executeSql('DROP TABLE menu');
        tx.executeSql('DROP TABLE carrinho');
        tx.executeSql('CREATE TABLE IF NOT EXISTS menu (ID unique, NOME varchar, DESCRI varchar, PRECO float)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS carrinho (ID unique, NOME varchar, PRECO float)');
        console.log('sucessful create table');
        tx.executeSql('INSERT INTO menu (ID, NOME, DESCRI, PRECO) VALUES (?, ?, ?, ?)', [1, 'Mussarela','Queijo,tomate', 23.00]);
        tx.executeSql('INSERT INTO menu (ID, NOME, DESCRI, PRECO ) VALUES (?, ?, ?,?)', [2, 'Calabresa', 'Calabresa,tomate',25.00]);
        
        tx.executeSql('SELECT * FROM menu', [], function (tx, results) {
        var len = results.rows.length;
        for (var i = 0; i < len; i++) {
            $scope.categories.push({
                NOME: results.rows.item(i).NOME,
                DESCRI: results.rows.item(i).DESCRI,
                PRECO: results.rows.item(i).PRECO
        });
        // Make sure to apply scope change so that ng-repeat updates
        $scope.$apply();
        } 
        });
        
    });
    
    $scope.select = function (category){
        alert(category.NOME);
        $rootScope.nome = category.NOME;
        $rootScope.descri = category.DESCRI;
        $rootScope.preco = category.PRECO;
    }

    var cont = 1;
    $rootScope.callCompra = function(nome,preco){ 
        $rootScope.isVisible = true;
        $rootScope.produtos = [];
        
        db.transaction(function(tx){
            tx.executeSql('INSERT INTO carrinho (ID, NOME,PRECO) VALUES (?, ?, ?)', [cont ++,$rootScope.nome, $rootScope.preco]);      
                  
            tx.executeSql('SELECT * FROM carrinho', [], function (tx, result) {
                var tam = result.rows.length;
                for (var i = 0; i < tam; i++) {
                $rootScope.produtos.push({
                    ID: result.rows.item(i).ID,
                    NOME: result.rows.item(i).NOME,
                    PRECO: result.rows.item(i).PRECO
                    });
                $rootScope.$apply();
                } 
            });      
        });
    }
        
    $rootScope.DelForItem = function(produto){
        $rootScope.produtos = [];
        db.transaction(function(tx){
            tx.executeSql('DELETE FROM carrinho WHERE ID = (?) ',[produto.ID]);  
            tx.executeSql('SELECT * FROM carrinho', [], function (tx, result) {
                var tam = result.rows.length;
                for (var i = 0; i < tam; i++) {
                $rootScope.produtos.push({
                    ID: result.rows.item(i).ID,
                    NOME: result.rows.item(i).NOME,
                    PRECO: result.rows.item(i).PRECO
                    });
                $rootScope.$apply();
                } 
            });
            
        });

    }   
    
     
    
})
   
.controller('confirmarCtrl', function($scope) {

    
})
   
.controller('localidadeCtrl', function($scope) {
    
})
      
.controller('carrinhoCtrl',function($scope) {

        
})
   
.controller('formaDePagamentoCtrl', function($scope) {

    
})
   
.controller('loginCtrl', function($scope) {
    
})
   
.controller('selecioneCtrl',function($scope, $rootScope) {
    $scope.total = {};    
    console.log($scope.total.val);
 
})
 
.controller('tabs', function($scope) {

})


/*
    var db = openDatabase('fastdelivery', '1.0', 'Test DB', 2 * 1024 * 1024);
    $scope.produtos = [];
    
    db.transaction(function(tx) { 
    tx.executeSql('CREATE TABLE IF NOT EXISTS menu (id, nome, preco)');
    tx.executeSql('INSERT INTO menu (id, nome, preco) VALUES (?, ?, ?)', [1, 'Mussarela', 23]);
    tx.executeSql('INSERT INTO menu (id, nome, preco) VALUES (?, ?, ?)', [1, 'Calabresa', 25]);
    tx.executeSql('SELECT * FROM menu', [], function (tx, results) {
      var len = results.rows.length;
      for (var i = 0; i < len; i++) 
      {
        $scope.produtos.push({
          id: results.rows.item(i).id,
          nome: results.rows.item(i).nome,
          preco: results.rows.item(i).preco
        });
        // Make sure to apply scope change so that ng-repeat updates
        $scope.$apply();
      }
    });
  },function(error) {
    console.log(error)
  });
  
  
          $scope.doRefresh = function() {
            $http.get('/new-items')
            .success(function(newItems) {
            $rootScope.produtos = newItems;
            })
            .finally(function() {
       // Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
            });
        };
  */