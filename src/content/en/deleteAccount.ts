import type { PageContent } from '../types'

const deleteAccount: PageContent = {
  title: 'Delete Account and Data',
  lastUpdatedISO: '2026-05-03',
  intro: [
    {
      kind: 'p',
      html: 'This page explains how you can delete your Gourmetpedia account and what happens to your data when your account is deleted.',
    },
    {
      kind: 'p',
      html: 'This page is intended to be available at <a href="https://gourmetpedia.com/delete-account">https://gourmetpedia.com/delete-account</a>.',
    },
  ],
  sections: [
    {
      id: 'how-to-delete',
      title: '1. How to delete your account',
      blocks: [
        { kind: 'p', html: 'You can delete your Gourmetpedia account directly in the App:' },
        { kind: 'p', html: '<strong>Profile &gt; Delete Account</strong>' },
        {
          kind: 'p',
          html: 'Before your account is deleted, you may be asked to confirm your choice. Account deletion through the App is <strong>immediate and irreversible</strong>.',
        },
      ],
    },
    {
      id: 'cannot-access-app',
      title: '2. If you cannot access the App',
      blocks: [
        {
          kind: 'p',
          html: 'If you cannot access the App, you can request account and data deletion by contacting us at <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>.',
        },
        {
          kind: 'p',
          html: 'To help us identify your account, please contact us from the email address associated with your Gourmetpedia account and use the subject line <strong>Delete my Gourmetpedia account</strong>. We may ask you to verify your identity before processing the request.',
        },
        {
          kind: 'p',
          html: 'Once your request has been verified and processed, your account and associated data will be deleted as described below.',
        },
      ],
    },
    {
      id: 'what-data-is-deleted',
      title: '3. What data is deleted',
      blocks: [
        {
          kind: 'p',
          html: 'When you delete your account, Gourmetpedia deletes the personal data and content associated with your account, including:',
        },
        {
          kind: 'ul',
          items: [
            'your Gourmetpedia account;',
            'your email address;',
            'your first name and last name;',
            'your saved recipes;',
            'your recipe library;',
            'your organization, settings, and preferences;',
            'your synced data across devices.',
          ],
        },
        {
          kind: 'p',
          html: 'After deletion, Gourmetpedia no longer keeps your account data in its own systems.',
        },
      ],
    },
    {
      id: 'shared-recipes',
      title: '4. Shared recipes',
      blocks: [
        {
          kind: 'p',
          html: "If you previously shared a recipe with another user, that recipe may remain available in the recipient's account.",
        },
        {
          kind: 'p',
          html: "When a recipe is shared in Gourmetpedia, it is copied or duplicated into the recipient's own recipe library. Gourmetpedia does not keep a persistent author link that allows us to identify or remove all copies of a recipe after the original account is deleted.",
        },
        {
          kind: 'p',
          html: 'Deleting your account removes your own account and your own recipe library, but it does not automatically delete recipe copies that were previously saved by other users.',
        },
      ],
    },
    {
      id: 'subscription-and-purchases',
      title: '5. Subscription and purchases',
      blocks: [
        {
          kind: 'note',
          html: '<strong>Important:</strong> deleting your Gourmetpedia account does not automatically cancel your Apple App Store or Google Play subscription.',
        },
        {
          kind: 'p',
          html: 'If you have an active subscription, you must cancel it separately through your Apple ID or Google Play account.',
        },
        {
          kind: 'p',
          html: 'If you delete your Gourmetpedia account without cancelling your subscription, Apple or Google may continue to manage and bill the subscription according to their own terms and policies.',
        },
        {
          kind: 'p',
          html: 'After account deletion, you may lose access to premium features, saved recipes, synced data, and any content associated with your Gourmetpedia account.',
        },
        {
          kind: 'p',
          html: 'Restoring a purchase may restore your subscription entitlement where technically possible, but it will not restore recipes, settings, shared recipe records, or account data that were permanently deleted.',
        },
      ],
    },
    {
      id: 'before-deleting',
      title: '6. Before deleting your account',
      blocks: [
        { kind: 'p', html: 'Before deleting your account, we recommend that you:' },
        {
          kind: 'ul',
          items: [
            'export or save any recipes you want to keep, if this option is available;',
            'cancel your active subscription through Apple or Google if you no longer want to be charged;',
            'understand that account deletion is permanent and cannot be undone.',
          ],
        },
      ],
    },
    {
      id: 'need-help',
      title: '7. Need help?',
      blocks: [
        {
          kind: 'p',
          html: 'If you have questions about account deletion or your data, you can contact us at:',
        },
        {
          kind: 'p',
          html: '<a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>',
        },
        {
          kind: 'p',
          html: 'Operator:<br><strong>Quentin Tusset</strong><br>Liege, Belgium',
        },
      ],
    },
  ],
}

export default deleteAccount
