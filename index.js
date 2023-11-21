//import express

import express from "express";

const app = express();

app.use(express.json());

let laptop = [
    {
        id: 1,
        brand: "dell i5",
        price: 90000,
    },
    {
        id: 2,
        brand: "asus",
        price: 80000,
    },
];






//view laptop list

app.get("/", (req, res) => {
    res.status(200).send(laptop);
});

//add laptop

app.post("/add", (req, res) => {
    const addLaptop = req.body;

    //console.log(addLaptop);

    const added = laptop.push(addLaptop);
    return res.status(201).send({ message: "laptop added successfully" });
});




// delete laptop 

app.delete("/delete", (req, res) => {
    const laptopToBeRemoved = req.body.id;

    //console.log(laptopToBeRemoved)

    const removeLaptop = laptop.find((item) => {
        return item.id === laptopToBeRemoved;
    })
    console.log(removeLaptop)



    if (!removeLaptop) {
        return res.status(404).send({ message: "laptop id not found" })
    }

    const newlaptopList = laptop.filter((item) => {
        return item.id != laptopToBeRemoved;
    })

    laptop = [...newlaptopList];

    return res.status(404).send({ message: "customer removed " })
})




const port = 8080;

app.listen(port, (req, res) => {
    console.log(`server is running on port ${port}`);
});
