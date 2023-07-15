# HospitalAPI

# COVID-19 Hospital API

This is an API designed for the doctors of a Hospital that has been allocated by the government for testing, quarantine, and well-being of COVID-19 patients.

## Users

There are two types of users in this system:

1. Doctors: They can log in to the system.
2. Patients: They visit the hospital for checkups and follow-up appointments.

## API Endpoints

### Authentication

- `POST /login`: Endpoint for doctors to log in. It accepts the doctor's credentials (username and password) and returns an access token for subsequent requests.

### Patients

- `POST /patients`: Register a patient in the system. It accepts the patient's phone number and returns the patient's information. If the patient already exists, it returns the existing patient's information.
- `GET /patients/{patientId}`: Retrieve a patient's information by their ID.
- `POST /patients/{patientId}/reports`: Create a new report for a patient. The report should include the following fields:
  - Created by doctor
  - Status (enum): Can be one of [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]
  - Date

### Error Handling

The API returns appropriate error codes and error messages in case of invalid requests or any other errors.

## Authentication and Authorization

The API uses token-based authentication. Doctors are required to include the access token in the headers of their requests to access the protected endpoints. Unauthorized requests will be rejected.

## Technologies Used

The API is built using the following technologies:
````
1. NodeJs
2. ExpressJs
3. MongoDB
````

## Getting Started

To set up the API on your local machine, follow these steps:
````
1. Clone the repository.
2. Install the dependencies using npm.
3. Set up the database and run the necessary migrations.
4. Configure the environment variables.
5. Start the server.
6. Access the API endpoints using a tool like [Specify a tool, e.g., cURL, Postman].
````

### After reaching the project directory you have to run the following the command.
````
 npm install 
node index.js
````

### Folder Structure

HospitalAPI
  ->|
    |              
    |---> config --->|---> mongoose.js
    |                |---> passport-jwt-Strategy.js
    |                  
    |---> controllers --->|---> doctors_controller.js
    |                     |---> home_controller.js
    |                     |---> patients_controller.js
    |                     |---> reports_controller.js
    |
    |---> models --->|---> doctor.js
    |                |---> patient.js
    |                |---> report.js
    |
    |--> node_modules
    |
    |---> routes --->|---> doctor.js
    |                |---> index.js
    |                |---> patient.js
    |                |---> report.js
    |
    |---> README.md
    |---> index.js
    |---> package-lock.json
    |---> package.json
 
    ````

