
@echo off

set "script_full_path=%~dp0"

echo %script_full_path%
echo "node %script_full_path%\index.js"
node "%script_full_path%\index.js"