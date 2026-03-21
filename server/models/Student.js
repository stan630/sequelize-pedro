module.exports = (sequelize, DataTypes) =>{
   const Student = sequelize.define("Student", {
      fname: {
         type:DataTypes.STRING,
         allowNull: false
      },
      lname: {
         type:DataTypes.STRING,
         allowNull: false
      },
      email: {
         type:DataTypes.STRING,
         allowNull: false
      },
      major: {
         type:DataTypes.STRING,
         allowNull: false
      },
      dorm: {
         type:DataTypes.STRING,
         allowNull: false
      },
   }, { timestamps:false
   })

   return Student
}