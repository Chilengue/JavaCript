var obj=
{
    ref.changePassword({
      newEmail: "bobtony@firebase.com",
      oldEmail: "bobtony@google.com",
      Password: "correcthorsebatterystaple"
    }, function(error) {
      if (error) {
        switch (error.code) {
          case "INVALID_PASSWORD":
            console.log("The specified user account password is incorrect.");
            break;
          case "INVALID_USER":
            console.log("The specified user account does not exist.");
            break;
          default:
            console.log("Error creating user:", error);
        }
      } else {
        console.log("User email changed successfully!");
         // success
      }
      }),
};

var firebase=
{
    ref.changePassword({
      newEmail: "bobtony@firebase.com",
      oldEmail: "bobtony@google.com",
      Password: "correcthorsebatterystaple"
    }, function(error) {
      if (error) {
        switch (error.code) {
          case "INVALID_PASSWORD":
            console.log("The specified user account password is incorrect.");
            break;
          case "INVALID_USER":
            console.log("The specified user account does not exist.");
            break;
          default:
            console.log("Error creating user:", error);
        }
      } else {
        console.log("User email changed successfully!");
         // success
      }
      });
};






