/**
 * Reusable Web3Forms submission helper.
 *
 * Usable by ANY form on the site — appointment requests, a general contact
 * form, a callback-request widget, etc. Keeping the submission logic here
 * (instead of duplicated inside every form component) means:
 *   - one place to fix bugs or change providers later
 *   - every form gets the same "not configured yet" safety fallback
 *   - future forms in this or other projects can reuse it as-is
 *
 * Requires VITE_WEB3FORMS_ACCESS_KEY to be set (see .env.example).
 */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

/**
 * @param {Object} fields - Form field data, e.g. { Name, Phone, Email, Service }.
 *   Keys become the labels shown in the notification email. Avoid the
 *   reserved keys already set below (access_key, subject, from_name).
 * @param {Object} [options]
 * @param {string} [options.subject] - Email subject line for the notification.
 * @param {string} [options.fromName] - Display name shown as the sender.
 * @returns {Promise<{success: boolean, missingKey?: boolean, message?: string}>}
 */
export async function submitToWeb3Forms(fields, options = {}) {
  const { subject = 'New website form submission', fromName = 'Website Form' } = options

  if (!ACCESS_KEY) {
    // The key hasn't been configured yet. Fail gracefully instead of
    // throwing, so the calling form can show a friendly inline message
    // (e.g. "please call or WhatsApp us instead") rather than crashing.
    return {
      success: false,
      missingKey: true,
      message: 'This form is not fully configured yet. Please contact us directly instead.',
    }
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject,
        from_name: fromName,
        ...fields,
      }),
    })

    const result = await response.json()

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Submission failed')
    }

    return { success: true }
  } catch (err) {
    return {
      success: false,
      message: err?.message || 'Something went wrong. Please try again.',
    }
  }
}
