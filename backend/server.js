const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors')                
const helmet = require('helmet');
const users = require("./routes/api/users");
const exercisesRouter = require('./routes/guestDeatailsRouter');
const foreignRouter = require('./routes/foreignGuestDeatailsRouter');
const RdateRouter = require('./routes/dates');
const path = require('path');
const reservationRouter = require('./routes/reservationRouter');
const slotRouter = require('./routes/slotRouter');
const pinkreservationRouter = require('./routes/reservationRouter pink');
const pinkslotRouter = require('./routes/slotRouter pink');
const greenreservationRouter = require('./routes/reservationRouter green');
const greenslotRouter = require('./routes/slotRouter green');
const packagenoRouter = require('./routes/packageNoRouter');
const packageRouter = require('./routes/packageDescriptionRouter');
const foodRouter = require('./routes/foods');
const dinnerRouter = require('./routes/dinner');
const lunchRouter = require('./routes/lunch');
const fileupload = require('express-fileupload');
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(fileupload({
   useTempFiles:true
}));
//app.use(bodyParser.json());
app.use(express.json());
app.use(helmet());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true,
      useUnifiedTopology : true,
      useNewUrlParser : true,
      useFindAndModify: false,
      useCreateIndex: true

    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes

//login
app.use("/api/users", users);



//guest deatails form
app.use('/exercises',exercisesRouter);
app.use('/foreign',foreignRouter);

//date Calander
app.use('/rdate',RdateRouter);
app.use('/slots', slotRouter);
app.use('/reservations', reservationRouter);

//pink igabara
app.use('/pinkslots', pinkslotRouter);
app.use('/pinkreservations', pinkreservationRouter);

//green igabara
app.use('/greenslots', greenslotRouter);
app.use('/greenreservations', greenreservationRouter);


//package
app.use('/packageno',packagenoRouter);
app.use('/package',packageRouter);

//foods
app.use('/food',foodRouter);
app.use('/dinner',dinnerRouter);
app.use('/lunch',lunchRouter);



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port} !`));
