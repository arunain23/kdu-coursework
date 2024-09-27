const http = require('http');
const os = require('os');
const fs = require('fs');
const path = require('path');

// Question 1

// 1 a
function SysInfo() {
    return {
        HostName: os.hostname(),
        OS: os.platform(),
        Architecture: os.arch(),
        OS_Release: os.release(),
        Uptime: os.uptime(),
        NumberOfCores: os.cpus().length,
        Total_Memory: os.totalmem(),
        Free_Memory: os.freemem(),
        CWD: process.cwd()
    };
}


const systemInfo = SysInfo();

// // 1 b

fs.writeFileSync(path.join(__dirname, 'info.json'), JSON.stringify(systemInfo));


// 1 c


const server = http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'info.json'), (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
            return;
        }

        const str = "Hello, my name is Arunain!\nHere is my system information:\n";
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(str + data);
    });
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});



// QUESTION 2

const path = require('path');

// 2 a

function extractFileInfo(filePath) {
    return {
        extension: path.extname(filePath),
        baseName: path.basename(filePath),
        directory: path.dirname(filePath)
    };
}


// 2 b

function processFilePaths(filePaths) {
    return filePaths.map(filePath => extractFileInfo(filePath));
}

// 2 c 

const filePaths = [

    'dir1/dir2/file1.txt',
  
    'dir1/dir3/file2.txt',
  
    'dir1/dir3/file3.md',
  
    'dir4/file4.jpg',
  
    'dir4/file5.pdf',
  
  ];
console.log(processFilePaths(filePaths));
