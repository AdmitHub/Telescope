Template.post_vote.helpers({
  voteCount: function() {
    return (this.upvotes || 0) - (this.downvotes || 0);
  }
});
Template.post_vote.events({
  'click .js-unupvote': function(e, instance){
    var post = this;
    e.preventDefault();
    if(!Meteor.user()){
      Router.go(getSigninUrl());
      Messages.flash(i18n.t("Please log in first"), "info");
    }
    Meteor.call('cancelUpvotePost', post, function(error, result){
      trackEvent("post upvote cancelled", {'_id': post._id});
    });
  }
});
