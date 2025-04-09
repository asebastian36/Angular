# Notas

## TypeScript

Es JavaScript potenciado, usa extension `.ts`.

* Ofrece tipado estricto.
* Mejora la legibilidad.
* Permite usar caracteristicas modernas.

A diferencia de JS en TS se permiten los siguientes beneficios:

* Visualizar errores en el editor.
* Metodos y propiedades en los objetos (como Java).

> Complemento al apunte

¡Claro! Aquí tienes una explicación breve de cada uno de los temas que mencionaste. Estos conceptos son fundamentales para aprender **TypeScript** y trabajar de manera eficiente con este lenguaje.

---

### **1. Introducción a TypeScript**
- **Qué es**: TypeScript es un superconjunto de JavaScript que añade tipos estáticos y otras características avanzadas.
    - Permite detectar errores en tiempo de desarrollo (antes de ejecutar el código).
    - Se transpila a JavaScript, lo que significa que puedes usarlo en cualquier entorno que soporte JavaScript.
- **Beneficios**:
    - Mejora la legibilidad y mantenibilidad del código.
    - Proporciona herramientas avanzadas como autocompletado y verificación de tipos en editores de código.
    - Ideal para proyectos grandes y complejos.

---

### **2. Tipos básicos**
TypeScript introduce tipos estáticos para asegurar que las variables tengan valores consistentes:
- **`string`**: Cadenas de texto (`let name: string = "Angel";`).
- **`number`**: Números enteros o decimales (`let age: number = 25;`).
- **`boolean`**: Valores `true` o `false` (`let isActive: boolean = true;`).
- **`any`**: Tipo flexible que permite cualquier valor (no recomendado salvo casos específicos).
- **`void`**: Usado para funciones que no retornan nada (`function logMessage(): void { console.log("Hola"); }`).
- **`null` y `undefined`**: Representan valores nulos o indefinidos.
- **Tipos literales**: Valores específicos como `type Status = "active" | "inactive";`.

---

### **3. Objetos, arreglos e interfaces**
#### **Objetos**
- Los objetos en TypeScript pueden tener tipos definidos para sus propiedades:
  ```typescript
  const user: { name: string; age: number } = { name: "Angel", age: 25 };
  ```

#### **Arreglos**
- Los arreglos pueden ser tipados:
  ```typescript
  const numbers: number[] = [1, 2, 3];
  const names: string[] = ["Angel", "Maria"];
  ```

#### **Interfaces**
- Las interfaces definen la estructura de un objeto:
  ```typescript
  interface User {
    name: string;
    age: number;
  }

  const user: User = { name: "Angel", age: 25 };
  ```

---

### **4. Funciones y sus argumentos**
- Las funciones en TypeScript pueden tener tipos definidos para sus argumentos y retorno:
  ```typescript
  function add(a: number, b: number): number {
    return a + b;
  }
  ```
- También puedes usar parámetros opcionales o con valores por defecto:
  ```typescript
  function greet(name: string, age?: number): string {
    return `Hola, ${name}${age ? `, tienes ${age} años` : ""}`;
  }
  ```

---

### **5. Desestructuración de arreglos y objetos**
La desestructuración permite extraer valores de arreglos u objetos de manera concisa:

#### **Desestructuración de objetos**
```typescript
const user = { name: "Angel", age: 25 };
const { name, age } = user;
console.log(name); // "Angel"
```

#### **Desestructuración de arreglos**
```typescript
const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first); // 1
```

---

### **6. Importaciones y exportaciones**
TypeScript usa módulos para organizar el código. Puedes exportar e importar funciones, variables, clases, etc.:

#### **Exportar**
```typescript
// archivo utils.ts
export function greet(name: string): string {
  return `Hola, ${name}`;
}
```

#### **Importar**
```typescript
// archivo app.ts
import { greet } from "./utils";
console.log(greet("Angel")); // "Hola, Angel"
```

---

### **7. Clases, constructores**
Las clases permiten crear objetos con propiedades y métodos:

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hola, soy ${this.name} y tengo ${this.age} años`;
  }
}

const person = new Person("Angel", 25);
console.log(person.greet()); // "Hola, soy Angel y tengo 25 años"
```

También puedes usar modificadores de acceso (`public`, `private`, `protected`) para controlar el acceso a las propiedades y métodos.

---

### **8. Tipos genéricos**
Los genéricos permiten crear componentes reutilizables que funcionan con diferentes tipos:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const result1 = identity<string>("Hola");
const result2 = identity<number>(42);
```

También se usan en interfaces y clases:
```typescript
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const pair: KeyValuePair<string, number> = { key: "edad", value: 25 };
```

---

### **9. Decoradores**
Los decoradores son funciones especiales que añaden metadatos o modifican clases, métodos o propiedades:

```typescript
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Método ${key} llamado con argumentos: ${args}`);
    return originalMethod.apply(this, args);
  };
}

class MyClass {
  @log
  sayHello(name: string): string {
    return `Hola, ${name}`;
  }
}

const instance = new MyClass();
instance.sayHello("Angel"); // Logs: Método sayHello llamado con argumentos: Angel
```

---

### **10. Encadenamiento opcional**
El encadenamiento opcional (`?.`) permite acceder a propiedades o métodos de manera segura sin causar errores si algo es `null` o `undefined`:

```typescript
const user = { name: "Angel", address: { city: "Madrid" } };

console.log(user.address?.city); // "Madrid"
console.log(user.phone?.number); // undefined (sin error)
```

---

### **Resumen**
Estos temas te proporcionarán una base sólida para trabajar con TypeScript:
1. **Introducción a TypeScript**: Añade tipos estáticos a JavaScript.
2. **Tipos básicos**: Define tipos para variables (`string`, `number`, `boolean`, etc.).
3. **Objetos, arreglos e interfaces**: Estructura datos con objetos y define contratos con interfaces.
4. **Funciones y sus argumentos**: Define funciones con tipos claros para argumentos y retorno.
5. **Desestructuración**: Extrae valores de objetos y arreglos de manera concisa.
6. **Importaciones y exportaciones**: Organiza el código en módulos.
7. **Clases, constructores**: Crea objetos con propiedades y métodos.
8. **Tipos genéricos**: Crea componentes reutilizables con flexibilidad de tipos.
9. **Decoradores**: Añade metadatos o modifica clases y métodos.
10. **Encadenamiento opcional**: Accede a propiedades de manera segura.

Con estos conceptos, estarás listo para escribir código limpio, seguro y escalable en TypeScript. 😊 ¡Dime si necesitas más detalles sobre algún tema específico!
