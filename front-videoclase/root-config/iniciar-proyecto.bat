@echo off

echo Iniciando npm start en C:\Users\franc\OneDrive\Escritorio\ui_videoclase\front-videoclase\root-config...

:: Esperar que el usuario presione una tecla antes de ejecutar el primer npm start
echo Presiona una tecla para iniciar npm start en root-config...
pause

:: Ejecutar npm start en el directorio root-config (en una nueva ventana de consola)
cd /d "C:\Users\franc\OneDrive\Escritorio\ui_videoclase\front-videoclase\root-config"
start cmd /k "npm start"
echo npm start ejecutado en root-config.

:: Esperar 10 segundos entre cada ejecución, con pausa para que se presione una tecla antes de continuar

echo Presiona una tecla para iniciar iniciar-navbar.bat...
pause
start cmd /k "C:\Users\franc\OneDrive\Escritorio\ui_videoclase\front-videoclase\navbar\navbar.bat"

echo Presiona una tecla para iniciar iniciar-home.bat...
pause
start cmd /k "C:\Users\franc\OneDrive\Escritorio\ui_videoclase\front-videoclase\home\home.bat"

echo Presiona una tecla para iniciar iniciar-login.bat...
pause
start cmd /k "C:\Users\franc\OneDrive\Escritorio\ui_videoclase\front-videoclase\login\login.bat"

echo Presiona una tecla para iniciar iniciar-styleguide.bat...
pause
start cmd /k "C:\Users\franc\OneDrive\Escritorio\ui_videoclase\front-videoclase\styleguide\styleguide.bat"

echo Presiona una tecla para iniciar iniciar-navbar-videoclase.bat...
pause
start cmd /k "C:\Users\franc\OneDrive\Escritorio\ui_videoclase\front-videoclase\navbar-videoclase\navbar-videoclase.bat"

echo Todos los proyectos han sido iniciados.
pause


