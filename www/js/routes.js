angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.menu'
      2) Using $state.go programatically:
        $state.go('tabsController.menu');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/menu
      /page1/tab2/menu
  */
  .state('tabsController.menu', {
    url: '/menu',
    views: {
      'tab1': {
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      },
      'tab2': {
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.confirmar'
      2) Using $state.go programatically:
        $state.go('tabsController.confirmar');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/confirm
      /page1/tab2/confirm
      /page1/tab3/confirm
  */
  .state('tabsController.confirmar', {
    url: '/confirm',
    views: {
    //  'tab1': {
    //    templateUrl: 'templates/confirmar.html',
    //    controller: 'confirmarCtrl'
    //  },
      'tab3': {
        templateUrl: 'templates/confirmar.html',
        controller: 'confirmarCtrl'
      }//,
      //'tab3': {
        //templateUrl: 'templates/confirmar.html',
        //controller: 'confirmarCtrl'
      //}
    }
  })

  .state('tabsController.localidade', {
    url: '/localidade',
    views: {
      'tab1': {
        templateUrl: 'templates/localidade.html',
        controller: 'localidadeCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.carrinho'
      2) Using $state.go programatically:
        $state.go('tabsController.carrinho');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Relatorio
      /page1/tab2/Relatorio
  */
  .state('tabsController.carrinho', {
    url: '/Relatorio',
    views: {
      'tab3': {
        templateUrl: 'templates/carrinho.html',
        controller: 'carrinhoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.formaDePagamento'
      2) Using $state.go programatically:
        $state.go('tabsController.formaDePagamento');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/pagamento
      /page1/tab2/pagamento
  */
  .state('tabsController.formaDePagamento', {
    url: '/pagamento',
    views: {
    //  'tab1': {
    //    templateUrl: 'templates/formaDePagamento.html',
    //    controller: 'formaDePagamentoCtrl'
    //  },
      'tab3': {
        templateUrl: 'templates/formaDePagamento.html',
        controller: 'formaDePagamentoCtrl'
      }
    }
  })

  .state('login', {
    url: '/Login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.selecione'
      2) Using $state.go programatically:
        $state.go('tabsController.selecione');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Selecionar
      /page1/tab2/Selecionar
  */
  .state('tabsController.selecione', {
    url: '/Selecionar',
    views: {
      'tab2': {
        templateUrl: 'templates/selecione.html',
        controller: 'selecioneCtrl'
      }//,
      //'tab2': {
    //    templateUrl: 'templates/selecione.html',
    //    controller: 'selecioneCtrl'
    //  }
    }
  })

$urlRouterProvider.otherwise('/Login')

  

});