export const downloadCV = () => {
  const link = document.createElement("a")
  link.href = "/resume.pdf"   // public folder = root path
  link.download = "Santhosh_Kumar_Resume.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
