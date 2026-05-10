import type { PageContent } from '../types'

const privacy: PageContent = {
  title: 'Política de privacidad',
  lastUpdatedISO: '2026-05-06',
  intro: [
    {
      kind: 'p',
      html: 'Esta Política de privacidad explica cómo Quentin Tusset, con sede en Lieja, Bélgica ("nosotros", "nos" o "nuestro"), recopila, utiliza, almacena y protege información cuando utilizas Gourmetpedia (la "App").',
    },
    {
      kind: 'p',
      html: 'Gourmetpedia es una aplicación que permite a los usuarios guardar, organizar, sincronizar y consultar recetas encontradas en línea, incluidas recetas de Instagram, TikTok y otras plataformas de redes sociales.',
    },
    {
      kind: 'p',
      html: 'Al utilizar la App, confirmas que has leído y entendido esta Política de privacidad.',
    },
  ],
  sections: [
    {
      id: 'data-controller',
      title: '1. Responsable del tratamiento',
      blocks: [
        { kind: 'p', html: 'La App es operada por:' },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Lieja, Bélgica<br>Email: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>',
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: '2. Información que recopilamos',
      blocks: [
        {
          kind: 'p',
          html: 'Nuestro objetivo es recopilar solo la información necesaria para operar la App, proporcionar cuentas, permitir la sincronización y gestionar suscripciones.',
        },
        {
          kind: 'p',
          html: 'Según cómo utilices la App, podemos recopilar las siguientes categorías de información:',
        },
        { kind: 'h3', text: 'Información de cuenta' },
        {
          kind: 'ul',
          items: [
            'dirección de correo electrónico;',
            'nombre y apellidos;',
            'identificador de cuenta;',
            'fecha de creación de la cuenta y ajustes de la cuenta.',
          ],
        },
        { kind: 'h3', text: 'Recetas y contenido del usuario' },
        {
          kind: 'ul',
          items: [
            'recetas que guardas, creas, organizas o editas en la App;',
            'enlaces de recetas o URL de origen que añades a la App;',
            'notas, títulos, ingredientes, instrucciones, categorías u otra información de recetas que decides introducir;',
            'contenido que decides compartir con otros usuarios o mediante funciones para compartir.',
          ],
        },
        {
          kind: 'p',
          html: 'Eres responsable del contenido que añades a tus recetas. Debes evitar incluir información personal, sensible, confidencial o de terceros en tus recetas salvo que tengas derecho a hacerlo.',
        },
        { kind: 'h3', text: 'Información de suscripción y compras' },
        {
          kind: 'ul',
          items: [
            'estado de la suscripción, por ejemplo si está activa, caducada, cancelada o en periodo de prueba;',
            'historial de compras e información de derechos necesaria para proporcionar acceso premium;',
            'identificadores de transacciones o recibos relacionados con la tienda procesados a través de Apple App Store o Google Play;',
            'información recibida a través de RevenueCat para gestionar suscripciones y restaurar compras.',
          ],
        },
        {
          kind: 'p',
          html: 'No recopilamos ni almacenamos directamente los datos completos de tu tarjeta de pago. Los pagos y la facturación son gestionados por Apple App Store o Google Play, según la plataforma utilizada. Sus propios términos y políticas de privacidad se aplican al procesamiento de pagos.',
        },
        { kind: 'h3', text: 'Información técnica' },
        {
          kind: 'ul',
          items: [
            'tipo de dispositivo, sistema operativo y versión de la app;',
            'dirección IP o información aproximada de red;',
            'identificadores de Firebase y datos relacionados con la autenticación;',
            'registros, información de fallos y datos de diagnóstico necesarios para mantener la seguridad, fiabilidad y rendimiento.',
          ],
        },
        { kind: 'h3', text: 'Comunicaciones de soporte' },
        {
          kind: 'ul',
          items: [
            'tu dirección de correo electrónico;',
            'el contenido de tu solicitud de soporte;',
            'información necesaria para investigar y responder a tu solicitud.',
          ],
        },
      ],
    },
    {
      id: 'information-not-collected',
      title: '3. Información que no recopilamos intencionadamente',
      blocks: [
        {
          kind: 'p',
          html: 'Salvo que se indique claramente lo contrario, no recopilamos intencionadamente:',
        },
        {
          kind: 'ul',
          items: [
            'ubicación GPS precisa;',
            'datos de salud;',
            'datos biométricos;',
            'contactos de tu dispositivo;',
            'fotos, vídeos o archivos de tu dispositivo, salvo que decidas proporcionarlos a través de la App;',
            'números de tarjetas de pago;',
            'identificadores publicitarios para publicidad dirigida.',
          ],
        },
      ],
    },
    {
      id: 'how-we-use-information',
      title: '4. Cómo utilizamos tu información',
      blocks: [
        { kind: 'p', html: 'Utilizamos tu información para los siguientes fines:' },
        {
          kind: 'ul',
          items: [
            'crear, autenticar y gestionar tu cuenta;',
            'permitirte guardar, organizar, sincronizar y consultar recetas entre dispositivos;',
            'proporcionar la versión gratuita de la App, incluido el límite de 10 recetas;',
            'gestionar suscripciones de pago y acceso premium;',
            'restaurar compras cuando Apple, Google y RevenueCat lo permitan;',
            'proporcionar atención al cliente;',
            'mantener la seguridad, fiabilidad y rendimiento de la App;',
            'detectar y prevenir fraude, uso indebido, acceso no autorizado o abuso técnico;',
            'cumplir obligaciones legales, fiscales, contables, de protección del consumidor y regulatorias cuando corresponda.',
          ],
        },
      ],
    },
    {
      id: 'legal-basis',
      title: '5. Base jurídica del tratamiento',
      blocks: [
        {
          kind: 'p',
          html: 'Si te encuentras en el Espacio Económico Europeo, tratamos datos personales basándonos en una o varias de las siguientes bases jurídicas:',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Ejecución de un contrato:</strong> para proporcionar la App, gestionar tu cuenta, sincronizar recetas y ofrecer funciones de suscripción;',
            '<strong>Obligación legal:</strong> para cumplir requisitos legales, fiscales, contables, de protección del consumidor o regulatorios aplicables;',
            '<strong>Intereses legítimos:</strong> para proteger la App, prevenir fraudes, mantener la fiabilidad del servicio y responder a solicitudes de soporte;',
            '<strong>Consentimiento:</strong> cuando solicitamos tu consentimiento para una actividad de tratamiento específica.',
          ],
        },
      ],
    },
    {
      id: 'third-party-services',
      title: '6. Servicios de terceros',
      blocks: [
        {
          kind: 'p',
          html: 'Podemos utilizar proveedores de servicios externos de confianza para operar la App. Estos proveedores pueden tratar información limitada en nuestro nombre o como proveedores independientes, según el servicio.',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Firebase:</strong> utilizado para autenticación, base de datos, almacenamiento, sincronización, infraestructura, diagnóstico o servicios backend relacionados;',
            '<strong>RevenueCat:</strong> utilizado para gestionar suscripciones, derechos, estado de compra y restauración de compras;',
            '<strong>Apple App Store y Google Play:</strong> utilizados para procesar compras dentro de la app y suscripciones.',
          ],
        },
        {
          kind: 'p',
          html: 'Estos servicios pueden tratar información conforme a sus propias políticas de privacidad y leyes aplicables. No vendemos tus datos personales.',
        },
      ],
    },
    {
      id: 'sharing-recipes',
      title: '7. Compartir y visibilidad de las recetas',
      blocks: [
        {
          kind: 'p',
          html: 'Las recetas guardadas en tu cuenta están vinculadas a tu cuenta de Gourmetpedia y pueden sincronizarse entre tus dispositivos.',
        },
        {
          kind: 'p',
          html: 'Si utilizas una función para compartir, el contenido de la receta que decidas compartir puede ser accesible para las personas o el público seleccionado mediante esa función. Eres responsable de garantizar que cualquier contenido que compartas sea lícito, exacto y no infrinja los derechos de terceros.',
        },
      ],
    },
    {
      id: 'international-transfers',
      title: '8. Transferencias internacionales',
      blocks: [
        {
          kind: 'p',
          html: 'Algunos proveedores de servicios, incluidos Firebase, RevenueCat, Apple o Google, pueden tratar información fuera de Bélgica, del Espacio Económico Europeo o de tu país de residencia. Cuando sea necesario, se utilizan salvaguardias adecuadas conforme a las leyes de protección de datos aplicables.',
        },
      ],
    },
    {
      id: 'data-retention',
      title: '9. Conservación de datos',
      blocks: [
        {
          kind: 'p',
          html: 'Conservamos los datos personales solo durante el tiempo necesario para los fines descritos en esta Política de privacidad.',
        },
        {
          kind: 'ul',
          items: [
            'Los datos de cuenta se conservan mientras tu cuenta permanezca activa.',
            'Las recetas y el contenido de usuario relacionado se conservan mientras permanezcan guardados en tu cuenta.',
            'El estado de la suscripción y la información de derechos se conservan según sea necesario para proporcionar acceso premium y permitir la restauración de compras.',
            'Las comunicaciones de soporte pueden conservarse durante el tiempo necesario para responder a tu solicitud y mantener un registro de nuestras comunicaciones.',
          ],
        },
        {
          kind: 'p',
          html: 'Cuando tus datos ya no sean necesarios, o cuando se elimine tu cuenta, los eliminamos o anonimizamos cuando sea posible, salvo cuando la conservación sea exigida por la ley o por las políticas de proveedores externos como Apple, Google, Firebase o RevenueCat.',
        },
      ],
    },
    {
      id: 'account-deletion',
      title: '10. Eliminación de cuenta y consecuencias para las compras',
      blocks: [
        {
          kind: 'p',
          html: 'Puedes eliminar tu cuenta directamente en la App desde: <strong>Perfil &gt; Eliminar cuenta</strong>.',
        },
        {
          kind: 'p',
          html: 'Cuando confirmas la eliminación de la cuenta, está previsto que la eliminación surta efecto inmediatamente en Gourmetpedia. La información de tu cuenta de Gourmetpedia, las recetas guardadas y los datos asociados a tu cuenta se eliminan de nuestros sistemas activos. Esta acción es irreversible. Una vez eliminadas tu cuenta y tus recetas, no podemos restaurarlas.',
        },
        {
          kind: 'p',
          html: 'Eliminar tu cuenta de Gourmetpedia puede hacer que pierdas el acceso a funciones premium, recetas guardadas, datos sincronizados y cualquier acceso o contenido de la App vinculado a esa cuenta de Gourmetpedia.',
        },
        {
          kind: 'note',
          html: '<strong>Importante:</strong> eliminar tu cuenta de Gourmetpedia no cancela automáticamente tu suscripción de Apple App Store o Google Play. Si tienes una suscripción activa, debes cancelarla por separado desde los ajustes de suscripciones de tu Apple ID o de Google Play para evitar renovaciones futuras.',
        },
        {
          kind: 'p',
          html: 'Apple, Google y RevenueCat pueden conservar registros de compra, recibos de suscripción e información de transacciones relacionada conforme a sus propias obligaciones legales y políticas. Si creas una nueva cuenta de Gourmetpedia después de la eliminación, las recetas eliminadas y los datos de cuenta eliminados no podrán recuperarse. Si tu suscripción de Apple o Google sigue activa, puedes utilizar la opción de restaurar compra de la App cuando esté disponible, pero esto no restaurará recetas eliminadas ni datos de cuenta eliminados.',
        },
      ],
    },
    {
      id: 'your-rights',
      title: '11. Tus derechos',
      blocks: [
        { kind: 'p', html: 'Según tu ubicación, puedes tener derecho a:' },
        {
          kind: 'ul',
          items: [
            'acceder a los datos personales que conservamos sobre ti;',
            'solicitar la corrección de datos personales inexactos;',
            'solicitar la eliminación de tus datos personales;',
            'oponerte a determinadas actividades de tratamiento;',
            'solicitar la limitación del tratamiento;',
            'solicitar una copia de tus datos personales;',
            'retirar el consentimiento cuando el tratamiento se base en el consentimiento;',
            'presentar una reclamación ante una autoridad de protección de datos competente.',
          ],
        },
        {
          kind: 'p',
          html: 'Para ejercer tus derechos, contáctanos en: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>. Es posible que necesitemos verificar tu identidad antes de responder a tu solicitud.',
        },
      ],
    },
    {
      id: 'security',
      title: '12. Seguridad',
      blocks: [
        {
          kind: 'p',
          html: 'Utilizamos medidas técnicas y organizativas razonables para proteger tu información contra acceso no autorizado, pérdida, uso indebido, alteración o divulgación. Sin embargo, ningún sistema es completamente seguro y no podemos garantizar una seguridad absoluta.',
        },
      ],
    },
    {
      id: 'childrens-privacy',
      title: '13. Privacidad de menores',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia está destinada a un público general. Si eres menor de la edad exigida por las leyes de tu país para consentir el uso de servicios en línea, solo debes utilizar la App con el consentimiento y la supervisión de un padre, madre o tutor legal.',
        },
        {
          kind: 'p',
          html: 'No recopilamos conscientemente datos personales de menores sin el consentimiento adecuado cuando lo exige la ley. Si crees que un menor ha proporcionado datos personales sin el consentimiento adecuado, contáctanos en <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>.',
        },
      ],
    },
    {
      id: 'changes',
      title: '14. Cambios en esta Política de privacidad',
      blocks: [
        {
          kind: 'p',
          html: 'Podemos actualizar esta Política de privacidad de vez en cuando. Cuando realicemos cambios, actualizaremos la fecha de "Última actualización" en la parte superior de este documento. Si los cambios son significativos, podemos notificártelo a través de la App o por otros medios adecuados.',
        },
      ],
    },
    {
      id: 'contact',
      title: '15. Contacto',
      blocks: [
        {
          kind: 'p',
          html: 'Para preguntas sobre esta Política de privacidad o sobre cómo tratamos los datos personales, contáctanos en:',
        },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Gourmetpedia<br>Lieja, Bélgica<br>Email: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>',
        },
      ],
    },
  ],
}

export default privacy
