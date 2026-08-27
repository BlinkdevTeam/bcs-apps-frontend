export async function GET() {
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Booking Confirmation</title>
</head>
<body style="margin:0;padding:0;background-color:#0d0d0d;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0d0d0d;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;">

          <!-- ── SPROCKET RAIL TOP ── -->
          <tr>
            <td style="background-color:#161616;border-top:3px solid #A30A24;padding:12px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <!-- Left sprockets -->
                  <td width="32" style="vertical-align:middle;">
                    <table cellpadding="0" cellspacing="4">
                      <tr><td style="width:10px;height:10px;background:#0d0d0d;border-radius:2px;display:block;"></td></tr>
                      <tr><td style="width:10px;height:10px;background:#0d0d0d;border-radius:2px;display:block;margin-top:4px;"></td></tr>
                    </table>
                  </td>
                  <!-- Logo / Studio name -->
                  <td align="center" style="padding:8px 0;">
                    <h1 style="margin:4px 0 0;font-size:22px;font-weight:800;letter-spacing:2px;color:#F7F5F2;text-transform:uppercase;">
                      BLINK CREATIVE STUDIO
                    </h1>
                  </td>
                  <!-- Right sprockets -->
                  <td width="32" align="right" style="vertical-align:middle;">
                    <table cellpadding="0" cellspacing="4" align="right">
                      <tr><td style="width:10px;height:10px;background:#0d0d0d;border-radius:2px;display:block;"></td></tr>
                      <tr><td style="width:10px;height:10px;background:#0d0d0d;border-radius:2px;display:block;margin-top:4px;"></td></tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── HERO BAND ── -->
          <tr>
            <td style="background-color:#A30A24;padding:32px 24px;text-align:center;">
              <p style="margin:0 0 6px;font-size:11px;letter-spacing:3px;color:rgba(247,245,242,0.6);text-transform:uppercase;font-family:monospace;">Booking Received</p>
              <h2 style="margin:0;font-size:28px;font-weight:800;color:#F7F5F2;letter-spacing:-0.5px;">
                You're on the books,
              </h2>
              <p style="margin:10px 0 0;font-size:14px;color:rgba(247,245,242,0.75);line-height:1.6;">
                We've received your booking and payment proof.<br/>
                We'll verify and send a final confirmation shortly.
              </p>
            </td>
          </tr>

          <!-- ── BOOKING DETAILS CARD ── -->
          <tr>
            <td style="background-color:#1a1a1a;padding:32px 24px;">

              <!-- Eyebrow label -->
              <p style="margin:0 0 16px;font-size:10px;letter-spacing:3px;color:#6E6E6E;text-transform:uppercase;font-family:monospace;border-bottom:1px solid #2a2a2a;padding-bottom:10px;">
                ◳ Booking Summary
              </p>

              <!-- Row: Service -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
                <tr>
                  <td style="font-size:12px;color:#6E6E6E;text-transform:uppercase;letter-spacing:1px;font-family:monospace;width:40%;">Service</td>
                  <td align="right" style="font-size:14px;font-weight:700;color:#F7F5F2;"></td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #2a2a2a;margin:0 0 14px;" />

              <!-- Row: Date -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
                <tr>
                  <td style="font-size:12px;color:#6E6E6E;text-transform:uppercase;letter-spacing:1px;font-family:monospace;width:40%;">Date</td>
                  <td align="right" style="font-size:14px;font-weight:700;color:#F7F5F2;"></td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #2a2a2a;margin:0 0 14px;" />

              <!-- Row: Time -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
                <tr>
                  <td style="font-size:12px;color:#6E6E6E;text-transform:uppercase;letter-spacing:1px;font-family:monospace;width:40%;">Time</td>
                  <td align="right" style="font-size:14px;font-weight:700;color:#F7F5F2;"></td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #2a2a2a;margin:0 0 16px;" />

              <!-- Total -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size:12px;color:#6E6E6E;text-transform:uppercase;letter-spacing:1px;font-family:monospace;">Total Amount</td>
                  <td align="right">
                    <span style="font-size:24px;font-weight:900;color:#A30A24;letter-spacing:-0.5px;">
                     
                    </span>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── WHAT'S NEXT ── -->
          <tr>
            <td style="background-color:#141414;padding:24px;border-top:1px solid #2a2a2a;">
              <p style="margin:0 0 12px;font-size:10px;letter-spacing:3px;color:#6E6E6E;text-transform:uppercase;font-family:monospace;">What happens next</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="top" width="28" style="padding-top:2px;">
                    <span style="display:inline-block;width:20px;height:20px;background:#A30A24;border-radius:50%;text-align:center;line-height:20px;font-size:11px;font-weight:700;color:#F7F5F2;font-family:monospace;">1</span>
                  </td>
                  <td style="font-size:13px;color:#9a9a9a;line-height:1.6;padding-bottom:10px;">
                    We review your payment proof — usually within 24 hours.
                  </td>
                </tr>
                <tr>
                  <td valign="top" width="28" style="padding-top:2px;">
                    <span style="display:inline-block;width:20px;height:20px;background:#A30A24;border-radius:50%;text-align:center;line-height:20px;font-size:11px;font-weight:700;color:#F7F5F2;font-family:monospace;">2</span>
                  </td>
                  <td style="font-size:13px;color:#9a9a9a;line-height:1.6;padding-bottom:10px;">
                    You'll receive a second email once your booking is fully confirmed.
                  </td>
                </tr>
                <tr>
                  <td valign="top" width="28" style="padding-top:2px;">
                    <span style="display:inline-block;width:20px;height:20px;background:#A30A24;border-radius:50%;text-align:center;line-height:20px;font-size:11px;font-weight:700;color:#F7F5F2;font-family:monospace;">3</span>
                  </td>
                  <td style="font-size:13px;color:#9a9a9a;line-height:1.6;">
                    Show up on your scheduled date and let's make something great.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td style="background-color:#161616;border-bottom:3px solid #A30A24;padding:20px 24px;text-align:center;">
              <p style="margin:0 0 4px;font-size:11px;color:#6E6E6E;letter-spacing:1px;">
                Questions? Reply to this email or reach us at
                <a href="mailto:${process.env.GMAIL_USER}" style="color:#A30A24;text-decoration:none;">${process.env.GMAIL_USER}</a>
              </p>
              <p style="margin:8px 0 0;font-size:10px;color:#3a3a3a;font-family:monospace;letter-spacing:2px;">
                © ${new Date().getFullYear()} BLINK CREATIVE STUDIO
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}