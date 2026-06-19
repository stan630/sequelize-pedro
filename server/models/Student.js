module.exports = (sequelize, DataTypes) =>{
   const Student = sequelize.define("Student", {
      fname: {
         type:DataTypes.STRING(50),
         allowNull: false
      },
      lname: {
         type:DataTypes.STRING(50),
         allowNull: false
      },
      email: {
         type:DataTypes.STRING(100),
         allowNull: false
      },
      major: {
         type:DataTypes.STRING(50),
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