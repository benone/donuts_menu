import { Meteor } from 'meteor/meteor';
import { dbDonuts, dbDonutsMenu } from '../imports/api/donuts.js'

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish("userData", function () {
        if (this.userId) {
            return Meteor.users.find({_id: this.userId});
        } else {
            this.ready();
        }
  });

  Meteor.publish("donuts", function () {
        return dbDonuts.find({});
    });
    Meteor.publish("donuts_menu", function () {
        return dbDonutsMenu.find({});
});
});
