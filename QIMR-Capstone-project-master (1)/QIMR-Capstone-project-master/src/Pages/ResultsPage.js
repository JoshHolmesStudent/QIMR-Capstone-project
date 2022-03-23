import React from 'react'
import "../Styles/Results.css"

export default function Results() {
    return (

        <main class="box">
      
        <img src="images/IFB398 - Results page.png"  height = "100px" alt="QIMR logo-stacked" class="results-img"/>
  
        <p>
          From the uploaded data, your results show the analysed mosquitos were native to Australia.
        </p>
        <p2>
            <img src="images/apple-save-icon-20.jpg" alt="Download-PDF" class="save-icon"/>
            <img src="images/mail_120263.png" alt="Email-results" class="email-icon"/>
          A PDF of you results can be downloaded and/ or an email can be sent.
        </p2>
        
        <a href="#">
        <button class="download-button download-button1">Download PDF</button>
      </a>
      <a href="#">
        <button class="email-button email-button1">Send Email Report</button>
      </a>
      </main>
    )
}