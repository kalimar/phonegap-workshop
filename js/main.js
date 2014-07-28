var app = {

  findByName: function() {
    console.log('findByName');
    this.store.findByName($('.search-key').val(), function(employees) {
      var l = employees.length;
      var e;
      $('.employee-list').empty();
      for (var i=0; i<l; i++) {
        e = employees[i];
        $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
      }
    });
  },

  showAlert: function (message, title) {
    if (navigator.notification) {
      navigator.notification.alert(message, null, title, 'OK');
    } else {
      alert(title ? (title + ": " + message) : message);
    }
  },

  renderHomeView: function() {
    $('body').html(html);
    $('.search-key').on('keyup', $.proxy(this.findByName, this));
  },

  initialize: function() {
    var self = this;
    this.homeTpl = Handlbars.compile($("#home-tpl").html());
    this.employeeLiTpl = Handlebars.compile
    this.store = new LocalStorageStore(function() {
      self.renderHomeView();
    });
  }
};


app.initialize();
