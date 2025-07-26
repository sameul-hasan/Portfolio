# Read the CSS file
$cssContent = Get-Content "style.css" -Raw

# Find the position of /* Footer */
$footerIndex = $cssContent.IndexOf("/* Footer */")

# Keep everything up to .contact-form { padding: 1rem; }
$beforeFooter = $cssContent.Substring(0, $footerIndex)

# Get everything from /* Footer */ onwards
$footerContent = $cssContent.Substring($footerIndex)

# Write the cleaned CSS
$beforeFooter + $footerContent | Set-Content "style.css" -NoNewline
Write-Host "CSS cleaned up successfully!"
