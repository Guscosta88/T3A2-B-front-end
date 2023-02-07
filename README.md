# **BBQ_Planner_T3A2-b_Front-end**

# **URL:**

#### **BBQ Planner web link:**
[https://t3a2-b-front-end-production.up.railway.app/](https://t3a2-b-front-end-production.up.railway.app/)


# **Table of contents:**

- [**Table of contents**](#table-of-contents)
    - [**R1 - Description of your website, including:**](#r1---description-of-your-website-including)

    - [**R2 - Dataflow Diagram:**](#r2---dataflow-diagram)

    - [**R3 - Application Architecture Diagram:**](#r3---application-architecture-diagram)

    - [**R4 - User Stories:**](#r4---user-stories)

    - [**R5 - Wireframes for multiple standard screen sizes, created using industry standard software:**](#r5---wireframes-for-multiple-standard-screen-sizes-created-using-industry-standard-software)

    - [**R6 - Screenshots of your Trello board throughout the duration of the project:**](#r6---screenshots-of-your-trello-board-throughout-the-duration-of-the-project)


## **R1 - Description of your website, including:**
- **Purpose**
    
    The main purpose of the Barbecue planner APP is to provide a solution to help with the quantities of food needed to perform a successful Barbecue with no waste and properly feeding everyone present considering each individual, their preferences and dietarian restricions.
    
    Problems this app solves:
    - Reduces food waste.
    - Considers each individual's preferences and food restrictions.
    - It facilitates planning.

- **Functionality / features**
    - Add people to the event's list.
    - Select specific types of drinks for each person.
    - Select options of preferences and Dietary restrictions.
    - Select Foods from a default items list containing items like salad, meats,  sausages, bread, rice, vegetarian options, etc.
    - Select Drinks from a default items list containing items like, beer, wine, softdrink, juice, etc.

    The app returns a shopping list with items and quantities.
    The app returns a list of people.

- **Target audience**

    - An individual who wants to entertain family and friends performing a barbecue.
    - A company organizing an event for its workers.
    - A professional chef or restaurant owner serving barbecue.

- **Tech stack:**
    - Deployment: Railway
    - Database: MongoDB
    - Back-end: Mongoose, Express, NodeJS
    - Frontend: React, Bootstrap
    
    - A general overview on how a MERN (MongoDB, Express, React, Node) stack works to get a better understanding on how it will be applied on this app. The application receives new data from the user or displays data retrieved from the database using React, This data passes through a web framework called Express that handles routes using Node and is then processed in a Middleware ODM (Object Data Modeling) library called Mongoose that serves JSON data to the MongoDB database, see image bellow.
    
    ![sample image](./images/R2_Dataflow_Diagram.png)

    [how-does-the-mern-stack-work](https://www.bocasay.com/how-does-the-mern-stack-work/)
    

## **R2 - Dataflow Diagram:**

- The Data flow diagram process chosen for this application is known as Gane & Sarson and it is commonly used for information systems. On the Barbecue Planner App the dataflow will start by an external entity called User, the User is able to add participants info that are processed and added to the participants database, this data is retrieved from the database and displayed on the app, the user can also choose to edit or delete this information, the grocery list and the drinks list retrieves data from the participants CRUD database as well as from a previously seeded and never changing drinks and foods database, process the data and displays it.

    ![Data Flow Diagram](./images/Data_flow_diagram_v2.svg)

    -The ERD (Entity Relationship Diagram) Bellow represents the tables and items in the database and how they interact, so we can have a clearer understanding of which of these data is being retrieved and processed in the dataflow diagram. 

    ![ERD](./images/ERD_BBQ_app.svg)

    

    [Dataflow Diagram](https://www.lucidchart.com/pages/data-flow-diagram/how-to-make-a-dfd)

## **R3 - Application Architecture Diagram:**

- Answer


    ![sample image](./images/sample.png)

    [sample reference](referenceURL)

## **R4 - User Stories:**

- Answer


    ![sample image](./images/sample.png)

    [sample reference](referenceURL)

## **R5 - Wireframes for multiple standard screen sizes, created using industry standard software:**

- **Low Fidelity Wireframe:**

- For the Low-fidelity Wireframe we had a first hand sketch of the layout to visualise how the pages and features would be organized.

![Low Fidelity Wireframe](./images/low_fidelity_Wireframe.jpg)

- **High Fidelity Wireframe:**

- We have decided to use a Design tool called Figma to create our High-fidelity Wireframe, Layouts and Prototypes showing the flow and sequence of pages, buttons and design for the 3 standard screen sizes, desktop 1440x1024, tablet 834x1194, mobile 390x844.

- **Mobile Screen size 390x844:**

- Find in the [Prototype - Mobile 390x844](https://www.figma.com/proto/8UKOCYP5rP6o3uEvtZ8zN7/T3A2-A---Wireframe?node-id=20%3A1551&scaling=scale-down&page-id=20%3A1307&starting-point-node-id=20%3A1551) a link to the Mobile version prototype containing all the pages, features and the flow between pages, you can click the buttons and it will give you a preview of the app's flow.

    ![Low Fidelity Wireframe](./images/mobile.jpg)

- **Tablet Screen size 834x1194:**

- Find in the [Prototype - Tablet 834x1194](https://www.figma.com/proto/8UKOCYP5rP6o3uEvtZ8zN7/T3A2-A---Wireframe?node-id=20%3A1821&scaling=scale-down&page-id=20%3A1306&starting-point-node-id=20%3A1821) a link to the Tablet version prototype containing all the pages, features and the flow between pages, you can click the buttons and it will give you a preview of the app's flow.

    ![Low Fidelity Wireframe](./images/tablet.jpg)

- **Desktop Screen size 1440x1024:**

- Find in the [Prototype - Desktop 1440x1024](https://www.figma.com/proto/8UKOCYP5rP6o3uEvtZ8zN7/T3A2-A---Wireframe?node-id=20%3A2089&scaling=scale-down&page-id=20%3A1305&starting-point-node-id=20%3A2089) a link to the Desktop version prototype containing all the pages, features and the flow between pages, you can click the buttons and it will give you a preview of the app's flow.

    ![Low Fidelity Wireframe](./images/desktop.jpg)    

    [Link to Figma workspace](https://www.figma.com/file/8UKOCYP5rP6o3uEvtZ8zN7/T3A2-A---Wireframe?node-id=0%3A1&t=YRxZrLkM0EeHI3zH-1)

## **R6 - Screenshots of your Trello board throughout the duration of the project:**

- Answer



    ![Trello Day one](./images/001_Trello.jpg)

    ![Trello Day two](./images/002_Trello.jpg)

    ![Trello Day three](./images/003_Trello.jpg)

    ![Trello Day three](./images/004_Trello.jpg)

    [Trello Board Link](https://trello.com/b/rLoXMfdJ/t3a2-a)
    