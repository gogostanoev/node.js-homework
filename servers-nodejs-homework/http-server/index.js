// Exercise #1

// Create server using HTTP module; -When the default url is hit return HTML content to the user, the content of your choice. -When the url /student is hit, return HTML with the informations: -Student name: "your name"; Student lastname: "your lastname"; -Academy: "the academy you are at"; -Subject: "the current subject we are learning";


import http from "http";


const server = http.createServer((request, response) => {

    const url = request.url;
    const method = request.method;


    if(url === "/"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h2>Testing out the http module</h2>")
        response.end()
    }

    if(url === "/student" && method === "GET"){
        console.log(method);
        response.setHeader("Content-Type", "text/html");
        response.write(`
        <p>Student name: Gorjan</p>
        <p>Student last name: Stanoev</p>
        <p>Academy: "SEDC"</p>
        <p>Subject: Node.JS</p>
        `)
        response.end()
    }
    
})


server.listen(3000, () => {
    console.log("Server fully functional")
})