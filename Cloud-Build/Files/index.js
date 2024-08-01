exports.app = (req, res) => {
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cloud Build</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 800px;
                    margin: 50px auto;
                    background: white;
                    padding: 20px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #003366;
                    text-align: center;
                }
                p {
                    color: #333;
                    line-height: 1.6;
                }
                .highlight {
                    color: #FF9966;
                    font-weight: bold;
                }
                footer {
                    text-align: center;
                    padding: 20px;
                    background: #003366;
                    color: white;
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to Cloud Build</h1>
                <p>
                    <span class="highlight">Cloud Build</span> is a service that executes your builds on Google Cloud Platform infrastructure. 
                    You can use Cloud Build to compile, test, and deploy software. 
                </p>
                <p>
                    With <span class="highlight">Cloud Build</span>, you can define your build steps in a simple YAML or JSON file and manage the entire CI/CD pipeline seamlessly.
                </p>
                <p>
                    Explore the power of Cloud Build to automate your workflow and enhance your productivity.
                </p>
            </div>
            <footer>
                App Version 1.2
            </footer>
        </body>
        </html>
    `;
    res.status(200).send(htmlContent);
};
