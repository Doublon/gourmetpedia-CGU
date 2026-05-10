import type { PageContent } from '../types'

const deleteAccount: PageContent = {
  title: 'Eliminar cuenta y datos',
  lastUpdatedISO: '2026-05-06',
  intro: [
    {
      kind: 'p',
      html: 'Esta página explica cómo puedes eliminar tu cuenta de Gourmetpedia y qué ocurre con tus datos cuando se elimina la cuenta.',
    },
    {
      kind: 'p',
      html: 'Esta página está prevista para estar disponible en <a href="https://gourmetpedia.com/delete-account">https://gourmetpedia.com/delete-account</a>.',
    },
  ],
  sections: [
    {
      id: 'how-to-delete',
      title: '1. Cómo eliminar tu cuenta',
      blocks: [
        { kind: 'p', html: 'Puedes eliminar tu cuenta de Gourmetpedia directamente en la App:' },
        { kind: 'p', html: '<strong>Perfil &gt; Eliminar cuenta</strong>' },
        {
          kind: 'p',
          html: 'Antes de que se elimine tu cuenta, se te puede pedir que confirmes tu elección. La eliminación de la cuenta desde la App es <strong>inmediata e irreversible</strong>.',
        },
      ],
    },
    {
      id: 'cannot-access-app',
      title: '2. Si no puedes acceder a la App',
      blocks: [
        {
          kind: 'p',
          html: 'Si no puedes acceder a la App, puedes solicitar la eliminación de tu cuenta y tus datos escribiéndonos a <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>.',
        },
        {
          kind: 'p',
          html: 'Para ayudarnos a identificar tu cuenta, contáctanos desde la dirección de correo asociada a tu cuenta de Gourmetpedia y utiliza el asunto <strong>Eliminar mi cuenta de Gourmetpedia</strong>. Podemos pedirte que verifiques tu identidad antes de tramitar la solicitud.',
        },
        {
          kind: 'p',
          html: 'Una vez verificada y procesada tu solicitud, tu cuenta y los datos asociados se eliminarán como se describe a continuación.',
        },
      ],
    },
    {
      id: 'what-data-is-deleted',
      title: '3. Qué datos se eliminan',
      blocks: [
        {
          kind: 'p',
          html: 'Cuando eliminas tu cuenta, Gourmetpedia elimina los datos personales y el contenido asociados a tu cuenta, incluidos:',
        },
        {
          kind: 'ul',
          items: [
            'tu cuenta de Gourmetpedia;',
            'tu dirección de correo electrónico;',
            'tu nombre y apellidos;',
            'tus recetas guardadas;',
            'tu biblioteca de recetas;',
            'tu organización, ajustes y preferencias;',
            'tus datos sincronizados entre dispositivos.',
          ],
        },
        {
          kind: 'p',
          html: 'Después de la eliminación, Gourmetpedia ya no conserva los datos de tu cuenta en sus propios sistemas.',
        },
      ],
    },
    {
      id: 'shared-recipes',
      title: '4. Recetas compartidas',
      blocks: [
        {
          kind: 'p',
          html: 'Si anteriormente compartiste una receta con otro usuario, esa receta puede seguir disponible en la cuenta del destinatario.',
        },
        {
          kind: 'p',
          html: 'Cuando se comparte una receta en Gourmetpedia, se copia o duplica en la propia biblioteca de recetas del destinatario. Gourmetpedia no conserva un enlace persistente de autoría que nos permita identificar o eliminar todas las copias de una receta después de que se elimine la cuenta original.',
        },
        {
          kind: 'p',
          html: 'Eliminar tu cuenta elimina tu propia cuenta y tu propia biblioteca de recetas, pero no elimina automáticamente las copias de recetas que otros usuarios hayan guardado previamente.',
        },
      ],
    },
    {
      id: 'subscription-and-purchases',
      title: '5. Suscripción y compras',
      blocks: [
        {
          kind: 'note',
          html: '<strong>Importante:</strong> eliminar tu cuenta de Gourmetpedia no cancela automáticamente tu suscripción de Apple App Store o Google Play.',
        },
        {
          kind: 'p',
          html: 'Si tienes una suscripción activa, debes cancelarla por separado desde tu Apple ID o tu cuenta de Google Play.',
        },
        {
          kind: 'p',
          html: 'Si eliminas tu cuenta de Gourmetpedia sin cancelar tu suscripción, Apple o Google pueden seguir gestionando y cobrando la suscripción conforme a sus propios términos y políticas.',
        },
        {
          kind: 'p',
          html: 'Después de eliminar la cuenta, puedes perder el acceso a funciones premium, recetas guardadas, datos sincronizados y cualquier contenido asociado a tu cuenta de Gourmetpedia.',
        },
        {
          kind: 'p',
          html: 'Restaurar una compra puede restaurar tu derecho de suscripción cuando sea técnicamente posible, pero no restaurará recetas, ajustes, registros de recetas compartidas ni datos de cuenta que se hayan eliminado permanentemente.',
        },
      ],
    },
    {
      id: 'before-deleting',
      title: '6. Antes de eliminar tu cuenta',
      blocks: [
        { kind: 'p', html: 'Antes de eliminar tu cuenta, te recomendamos que:' },
        {
          kind: 'ul',
          items: [
            'exportes o guardes las recetas que quieras conservar, si esta opción está disponible;',
            'canceles tu suscripción activa a través de Apple o Google si ya no quieres que se te cobre;',
            'entiendas que la eliminación de la cuenta es permanente y no se puede deshacer.',
          ],
        },
      ],
    },
    {
      id: 'need-help',
      title: '7. ¿Necesitas ayuda?',
      blocks: [
        {
          kind: 'p',
          html: 'Si tienes preguntas sobre la eliminación de la cuenta o tus datos, puedes contactarnos en:',
        },
        {
          kind: 'p',
          html: '<a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>',
        },
        {
          kind: 'p',
          html: 'Operador:<br><strong>Quentin Tusset</strong><br>Lieja, Bélgica',
        },
      ],
    },
  ],
}

export default deleteAccount
