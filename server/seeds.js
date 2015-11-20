var seedDB = function () {
  if (Inscriptos.find().count() === 0) {

    Inscriptos.insert(
      {
        "_id": "564dbcf361a3e3339a752166",
        "name": "José Martínez",
        "email": "josemartinez@hotmail.com",
        "telefono": "+1 (968) 570-3760",
        "acreditado": false,
        "cuando" : undefined,
        "quien": undefined,
      }
    );
    console.log("inserted José Martínez");

    Inscriptos.insert(
      {
        "_id": "564dbcf3f7a1a18aaca60999",
        "name": "María Laura Tonello",
        "email": "malauratonello@yahoo.com.ar",
        "telefono": "+1 (991) 409-3441",
        "acreditado": false,
        "cuando" : undefined,
        "quien": undefined,
      }
    );
    console.log("inserted María Laura Tonello");

    Inscriptos.insert(
      {
        "_id": "564dbcf3356c949ba5464bc5",
        "name": "Esteban Velárdez",
        "email": "evelardez@gmail.com",
        "telefono": "+1 (834) 599-2419",
        "acreditado": false,
        "cuando" : undefined,
        "quien": undefined,
      }
    );
    console.log("inserted Esteban Velárdez");

    Inscriptos.insert(

      {
        "_id": "564dbcf396187a8a95deeb5c",
        "name": "Mariana Figueras",
        "email": "marianitaf@hotmail.com",
        "telefono": "+1 (997) 578-3653",
        "acreditado": false,
        "cuando" : undefined,
        "quien": undefined,
      }
    );
    console.log("inserted Mariana Figueras");

    Inscriptos.insert(
      {
        "_id": "564dbcf3682c07848b9a79c5",
        "name": "Juan Carlos Caro Peralta",
        "email": "jccaro@yahoo.com.ar",
        "telefono": "+1 (959) 435-3741",
        "acreditado": false,
        "cuando" : undefined,
        "quien": undefined,
      }
    );
    console.log("inserted Juan Carlos Caro Peralta");

    Inscriptos.insert(
      {
        "_id": "564dbcf337096a8e41c3e918",
        "name": "Fernando Lamas",
        "email": "fer_lamas@hotmail.com",
        "telefono": "+1 (927) 529-3720",
        "acreditado": false,
        "cuando" : undefined,
        "quien": undefined,
      }
    );
    console.log("inserted Fernando Lamas");

    Inscriptos.insert(
      {
        "_id": "564dbcf34f534030e8088170",
        "name": "Ariel Ignacio Fuentes",
        "email": "arielito_fuentes@outlook.com",
        "telefono": "+1 (962) 537-3659",
        "acreditado": false,
        "cuando" : undefined,
        "quien": undefined,
      }
    );
    console.log("inserted Ariel Ignacio Fuentes");

    Inscriptos.insert(
      {
        "_id": "564dbcf3316e0e6c7419824f",
        "name": "Jaime Lannister",
        "email": "jaime@lannister.com",
        "telefono": "+1 (805) 421-3019",
        "acreditado": false,
        "cuando" : undefined,
        "quien": undefined,
      }
    );
    console.log("inserted Jaime Lannister");

    Inscriptos.insert(
      {
        "_id": "564dbcf3e6925f61e9cdb51d",
        "name": "Susana Palavecino",
        "email": "susi_78@yahoo.com.ar",
        "telefono": "+1 (945) 576-2763",
        "acreditado": false,
        "cuando" : undefined,
        "quien": undefined,
      }
    );
    console.log("inserted Susana Palavacino");

    Inscriptos.insert(
      {
        "_id": "564dbcf3ccbc9d2c52f17bbc",
        "name": "Franco Suárez",
        "email": "fran_sua@gmail.com",
        "telefono": "+1 (944) 592-2492",
        "acreditado": false,
        "cuando" : undefined,
        "quien": undefined,
      }
    );
    console.log("inserted Franco Suárez");
  }
}

seedDB();
