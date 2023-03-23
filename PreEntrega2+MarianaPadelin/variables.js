const cursos = [{id: 0, nombre:"ballet", dificultad: "intermedio",precio: 5000, edad: "inicial", horario: "Lunes y miércoles 16 hs"},
                {id: 1, nombre:"ballet", dificultad: "intermedio",precio: 5000, edad: "infantil", horario: "Lunes y miércoles 17 hs"},
                {id: 2, nombre:"ballet", dificultad: "intermedio",precio: 5000, edad: "teen", horario: "Lunes y miércoles 18 hs"},
                {id: 3, nombre:"ballet", dificultad: "intermedio",precio: 5000, edad: "juvenil", horario: "Lunes y miércoles 19 hs"},
                {id: 4, nombre:"ballet", dificultad: "intermedio",precio: 5000, edad: "adulto", horario: "Lunes y miércoles 20 hs"},
                {id: 5, nombre:"stretching", dificultad: "principiante", precio: 3500, edad: "adulto", horario: "Lunes, miércoles y viernes 10 hs"},
                {id: 6, nombre:"stretching", dificultad: "principiante", precio: 3500, edad: "mayor", horario: "Lunes, miércoles y viernes 10 hs"},
                {id: 7, nombre:"kpop", dificultad: "intermedio", precio: 4000, edad: "infantil", horario: "Jueves 18 hs"},
                {id: 8, nombre:"kpop", dificultad: "intermedio", precio: 4000, edad: "teen", horario: "Jueves 19 hs"},
                {id: 9, nombre:"contempo", dificultad: "avanzado", precio:5000, edad: "teen", horario: "Martes y jueves 16 hs"},
                {id: 10, nombre:"contempo", dificultad: "avanzado", precio:5000, edad: "juvenil", horario: "Martes y jueves 17 hs"},
                {id: 11, nombre:"esferodinamia", dificultad: "principiante", precio: 4000, edad: "adulto", horario: "Martes y jueves 10 hs"},
                {id: 12, nombre:"esferodinamia", dificultad: "principiante", precio: 4000, edad: "mayor", horario: "Martes y jueves 10 hs"},
                {id: 13, nombre:"pilates", dificultad: "principiante", precio: 4500, edad: "juvenil", horario: "Lunes, miércoles y viernes 8 hs"},
                {id: 14, nombre:"pilates", dificultad: "principiante", precio: 4500, edad: "adulto", horario: "Lunes, miércoles y viernes 8 hs"},
                {id: 15, nombre:"pilates", dificultad: "principiante", precio: 4500, edad: "mayor", horario: "Lunes, miércoles y viernes 8 hs"},
                {id: 16, nombre:"entrenamiento", dificultad: "avanzado", precio: 6000, edad: "adulto",  horario: "Lunes a viernes 9 hs"}]

let nombreCursos = ["Ballet", "Stretching", "Kpop", "Contempo", "Esferodinamia", "Pilates", "Entrenamiento"]

const datosPublicos = cursos.map((curso)=>{
    return {nombre: curso.nombre,
            dificultad: curso.dificultad,
            edad: curso.edad,
            horario: curso.horario
    }
})

let continuar = true