##############

# crear base de datos
sequelize db:create

# crear modelo Role
sequelize model:generate --name Role --attributes 'role:string'

# crear modelo User
sequelize model:generate --name User --attributes 'name:string,last_name:string,birthday:date,email:string,password:string,id_role:integer'

# crear modelo Doctor
sequelize model:generate --name Doctor --attributes 'id_user:integer'

# crear modelo Patient
sequelize model:generate --name Patient --attributes 'id_user:integer'

# crear modelo Appointment
sequelize model:generate --name Appointment --attributes 'id_doctor:integer,id_patient:integer,date:date,time:time'

# Ejecutar migraciones
sequelize db:migrate ## para todas

# Crear seed
sequelize seed:generate --name seed-roles
sequelize seed:generate --name seed-users
sequelize seed:generate --name seed-doctors
sequelize seed:generate --name seed-patients
sequelize seed:generate --name seed-appointments

# Ejecutar seeders
sequelize db:seed:all

