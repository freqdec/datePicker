var fdLocale = {
fullMonths:["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
monthAbbrs:["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
fullDays:["Lunes", "Martes", "Mi\u00E9rcoles", "Jueves", "Viernes", "S\u00E1bado", "Domingo"],
dayAbbrs:["Lun", "Mar", "Mi\u00E9", "Jue", "Vie", "Sab", "Dom"],
titles:["Mes Anterior", "Siguente Mes", "A\u00F1o Anterior", "Siguiente A\u00F1o", "Hoy", "Mostrar Calendario", "sm", "Semana [[%0%]] de [[%1%]]", "Semana", "Seleccione una fecha", "Arrastrar para mover", "Mostrar [[%0%]] primero", "Ir a Hoy", "Fecha deshabilitada\u003A"]};
try { if("datePickerController" in window) { datePickerController.loadLanguage(); }; } catch(err) {};