const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/donutDB"
);

const donutSeed = [
    {
        id: 1,
        name: "Glazed",
        image: "https://www.krispykreme.com/getattachment/1aa956f7-e7ca-4e27-bcc6-a603211d7c68/Original-Glazed-Doughnut.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 2,
        name: "Chocolate Iced Glazed",
        image: "https://www.krispykreme.com/getattachment/6139e1be-6614-479b-80cb-5067293d901d/Chocolate-Iced-Glazed.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 3,
        name: "Chocolate Sprinkle",
        image: "https://www.krispykreme.com/getattachment/da056e18-6433-4474-b98e-b4f3696bb72b/Chocolate-Iced-Glazed-with-Sprinkles.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 4,
        name: "Cream Filled",
        image: "https://www.krispykreme.com/getattachment/2921a3c7-350a-4077-8194-5c8900a9a940/Chocolate-Iced-Custard-Filled.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 5,
        name: "Glazed Jelly",
        image: "https://www.krispykreme.com/getattachment/2453215a-619a-40bd-a64b-1696f533d199/Glazed-Raspberry-Filled.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 6,
        name: "Pink Sprinkle",
        image: "https://www.krispykreme.com/getattachment/fcd5370c-1aa5-464a-8b24-3b82df06837a/Strawberry-Iced-with-Sprinkles.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 7,
        name: "Chocolate Cake",
        image: "https://www.krispykreme.com/getattachment/0cc91aab-7ead-4e5d-952a-88e909190a35/Glazed-Chocolate-Cake.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 8,
        name: "Cake",
        image: "https://www.krispykreme.com/getattachment/d4841d35-ba1e-4708-9549-4dc52793ed39/Traditional-Cake.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 9,
        name: "Chocolate Iced Cake",
        image: "https://www.krispykreme.com/getattachment/1d5b486e-45b0-4771-ab56-f44a2426baf7/Chocolate-Iced-Cake.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 10,
        name: "Glazed Chocolate Cake",
        image: "https://www.krispykreme.com/getattachment/0cc91aab-7ead-4e5d-952a-88e909190a35/Glazed-Chocolate-Cake.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 11,
        name: "Blueberry Cake",
        image: "https://www.krispykreme.com/getattachment/6b57c2f3-b56b-4b6c-8828-c63d0f99e32c/Glazed-Blueberry-Cake.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 12,
        name: "Apple Fritter",
        image: "https://www.krispykreme.com/getattachment/e84619be-bce0-4239-8352-2117e1b66ad0/Apple-Fritter.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 13,
        name: "Cinnamon Sugar",
        image: "https://www.krispykreme.com/getattachment/cbe20d75-913b-4ad7-9dc6-164d850395c4/Cinnamon-Sugar.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 14,
        name: "Cruller",
        image: "https://www.krispykreme.com/getattachment/d8f110d2-a357-473d-8c56-22dc80c9e073/Glazed-Cruller.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 15,
        name: "Chocolate Glazed Cruller",
        image: "https://www.krispykreme.com/getattachment/1aa956f7-e7ca-4e27-bcc6-a603211d7c68/Original-Glazed-Doughnut.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 16,
        name: "Powdered Cake",
        image: "https://www.krispykreme.com/getattachment/fb68570f-4549-45ae-a269-e45023b64695/Powdered-Cake.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 17,
        name: "Powderd Jelly",
        image: "https://www.krispykreme.com/getattachment/de7437d4-9d1a-40f3-b453-c5e511da0c4c/Powdered-Strawberry-Filled.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 18,
        name: "Seasonal",
        image: "https://www.krispykreme.com/getattachment/b1f4abdc-9431-47e6-80e5-887fd841bd2a/Pumpkin-Spice-Cake.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 19,
        name: "Cinnamon Twist",
        image: "https://www.krispykreme.com/getattachment/4fe0bd30-d7e6-4c1b-a7b5-218b9f88bc81/Cinnamon-Twist.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    {
        id: 20,
        name: "Maple ",
        image: "https://www.krispykreme.com/getattachment/91c97462-97a8-4de7-8894-c8ef8adfc2d1/Coffee-Glazed-Doughnut.aspx?width=310&height=310&mode=max&quality=60&format=jpg"
    },
    
    
];

const boxSeed = [
    {
        id: 1,
        boxname: "box10",
        donutcount: [
            
        ]

    }
]

db.Box
.remove({})
.then(() => db.Box.collection.insertMany(boxSeed))
.then(data => {
    console.log(data.result.n + "donuts inserted");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
