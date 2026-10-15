@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Node.js was not found. Install Node.js and reopen this file.
 pause
 exit /b 1
)
echo Open http://localhost:3001 in your browser after the server starts.
node server.js
pause
