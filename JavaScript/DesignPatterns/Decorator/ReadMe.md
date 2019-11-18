# Decorator Pattern
Structural design pattern that focuses on the ability to add behaviour or functionalities to existing classes dynamically. It is another viable alternative to sub-classing.

Asigna responsabilidades adicionales a un objeto dinamicamente, propircionando una alternativa flexible a la herencia para extender la funcionalidad.

A veces queremos anadir responsabilidades a objetos individuales en vez de a toda una clase.

## Aplicabilidad
Uso del Decorador

* Para anadir objetos individuales de forma dinamica y transparente, es decir, sin afectar a otros objetos.
* Para responsabilidades que pueden ser retiradas.
* Cuando la extension mediante la herencia no es viable. A veces es posible tener un gran numero de extensiones independientes, produciendose una explosion de subclases para permitir todas las combinaciones. O puede ser que una definicion de una clase este oculta o que no este disponigle para ser heredada.

## Participantes
* Componente
Define la interfaz para objetos a los que se puede anadir responsabilidades dinamicamente.

* ComponenteConcreto
Define un objeto al que se pueden anadir responsabilidades adicionales

* Decorador
Mantiene una referencia a un objeto Componente y define una interfaz que se ajusta a la interfaz del Componente

* DecoradorConcreto
Anade responsabilidades al componente.

## Colaboraciones
El Decorador redirige peticiones a su objeto Componente. Opcionalmente puede realizar operaciones adicionales antes y despues de reenviar la peticion.


