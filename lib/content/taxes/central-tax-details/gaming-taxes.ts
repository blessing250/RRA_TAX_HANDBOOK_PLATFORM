import {
  centralTaxLastUpdated,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const gamingTaxesDetail: CentralTaxDetailPage = {
  slug: "gaming-taxes",
  title: {
    en: "Gaming Taxes",
    fr: "Taxes sur les jeux",
    rw: "Imisoro ku mikino",
  },
  intro: {
    en: [
      `Gaming taxes includes Gaming Tax and Withholding Tax of 25% on Gambling Proceeds, also referred to as Withholding on Payments (WOP) on Gaming or ‘WOP-Gaming’. These taxes are applied on the proceeds of gambling activities and can therefore help to reduce the negative social impacts associated with gambling.`,
      `Gaming Tax is paid by the taxpayer on their income from gaming activities, whilst WOP-Gaming is withheld by the betting company on behalf of the player on their gambling proceeds. `,
       `In each case, the taxpayer or player who is withheld from is then able to claim the tax paid back in income declarations. These tax types are both types of withholding taxes. `,
    ],
  },
  sections: [
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
          `Any operator of gaming activities is required to register for both Gaming Tax and WOP-Gaming.`,
          `Gaming activities refers to any game played with cards, dice, tickets, equipment or any machine where the result depends upon the skill of the player or operator, the element of chance, or both, and is played for money or any representative of value. However, national lottery is exempted from Gaming tax and WOP-Gaming.`,

        ],
      },
    },
    {
      id: "gambling-proceeds",
      title: { en: "Gambling proceeds", fr: "Produits des jeux", rw: "Inyungu iva mu mikino" },
      content: {
        en: [
         `Gambling proceeds are defined as the difference between the winnings of a player and the amount of money invested by the player from the start until the end of the game.`,
        `If this amount is negative, i.e., the taxpayer received more money than they paid out, then the gambling proceeds are subject to Gaming Tax.`,
          `If this amount is positive, i.e., the player received more money than they paid out, then the gambling proceeds are subject to WOP-Gaming.`,

        ],
      },
    },
    {
      id: "tax-rates",
      title: { en: "Tax rates", fr: "Taux d'imposition", rw: "Ibipimo by'umusoro" },
      content: {
        en: [
           `All gambling proceeds to the taxpayer are subject to Gaming Tax of 40%.`,
           `<blockquote>
         <strong> Example </strong>
             <p> Rukundo places a bet of FRW 24,000 with ABC Betting Ltd. He loses the bet. Therefore, his gambling proceeds are equal to:<p>
             <p> FRW 0 (winnings) – FRW 24,000 (amount invested) = FRW -24,000</p>
              <p>As the gambling proceeds are negative, the taxpayer is required to declare and pay Gaming Tax. ABC Betting Ltd is required to pay Gaming Tax of:</p>
              <p>FRW 24,000 * 40% = FRW 9,600</p>
              <p>This FRW 9,600 is declared and paid by ABC Betting Ltd. ABC Betting Ltd.</p>
             <p> Gambling proceeds are subject to WOP-Gaming of 25%. This means that all the gambling proceeds are taxed at 25%.</p>
             </blockquote>`,
             `<blockquote>
              <strong>Example</strong>
              <p>Lucie cashes in FRW 160,000 with Rwanda Casinos Ltd. She plays blackjack and cashes out FRW 280,000 (including her initial buy-in). Therefore, her gambling proceeds are equal to:</p>
              <p>FRW 280,000 – FRW 160,000 = FRW 120,000</p>
              <p>As the gambling proceeds are positive, the taxpayer is required to declare and pay WOP-Gaming. Rwanda Casinos Ltd is required to withhold WOP-Gaming of:</p>
              <p>FRW 120,000 * 25% = FRW 30,000</p>
              <p>Therefore, the net amount that is transmitted by Rwanda Casinos Ltd to Lucie is:</p>
              <p>FRW 280,000 – FRW 30,000 = FRW 250,000</p>
              <p>The FRW 30,000 WOP-Gaming was withheld by Rwanda Casinos Ltd on behalf of Lucie.</p>
              </blockquote>`,

        ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
      `Both Gaming Tax and WOP-Gaming are declared and paid on a monthly basis. The declaration must be submitted and any tax paid within fifteen (15) days of the end of the tax period in which the payment was made. `,
      `This means that declarations concerning the tax period between March 1st and March 31st must be declared to RRA and paid by April 15th. Then declarations concerning the tax period between April 1st and April 30th must be declared to RRA and paid by May 15th and so on throughout the year.`,
       `Gaming Tax (40%) and Withholding Tax of 25% on Gambling Proceeds (WOP-Gaming) must each be declared separately, but in a similar manner. `,
       `The declaration process for gaming taxes is similar to other domestic taxes.`,
       `<strong>Annexures</strong>`,
       `Firstly, for both types of gaming taxes, download the Withholding Annexures from the E-Tax website,`,
         `However, it is important to note that both Gaming Tax and WOP-Gaming must complete their own annexure and declaration separately.`,
           `<strong> a) Withholding on Gaming 25% Tab </strong>`,
            `This tab refers to the Gaming Tax and is applicable to any transaction or game where the gambling proceeds are negative, i.e. where the betting company wins.`,
            `  The ‘Withholding on Gaming 25%’ tab has 10 columns. Each row is for a separate transaction or game for which tax has been paid. For each transaction, enter details on:`,
            `<ul>`,
             ` -   Withholdee’s Name - Enter the name of the player who lost the money.`,
              `-   Betting Number by Withholdees – Enter the number of individual bets made during the course of the game.`,
              `-   Transaction Number – Enter the unique invoice number of the transaction.`,
              `-   Date of Withholding (dd/mm/yyyy) – Enter the date of the transaction, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.`,
              `-   Nature of Bet – Enter a brief description of the type of bet, e.g ‘Casino’, ‘Slots’, or ‘Sports Betting’.`,
              `-   Total Output – Enter the total amount won by the betting company.`,
              `-   Total Input – Enter the total amount wagered by the betting company.`,
              `-   Difference Subjected to Tax – Enter the gambling proceeds as defined on page 265. This should equal ‘Total Output minus ‘Total Input’.`,
              `-   Rate Used – Enter the rate of tax that is withheld. This should always be entered on ‘40’ without including the percentage symbol.`,
              `-   Tax Due – Enter the amount of tax that was withheld. This should equal ‘Difference Subjected to Tax’ multiplied by the ‘Rate Used’%.`, 
              `</ul>`,
           `<strong>b) Withholding on Gaming 25% Tab</strong>`,
                `This tab refers to the WOP-Gaming and is applicable to any taxpayer who has paid out gambling proceeds to the player in a transaction or game.`,
               ` The ‘Withholding on Gaming 25%’ tab is very similar to the ‘Withholding on Gaming 40%’ tab discussed above, with the exception of:`,
               `<ul>`,
               ` -   Total Payment Received – Enter the total winnings of the player.`,
                `-   Total Amount Betted – Enter the total amount wagered by the player.`,
                `-   Rate Used – Enter the rate of Withholding Tax. This should always be entered as ‘25’ without including the percentage symbol.`,
                `-   Tax Due – Enter the amount of tax that was withheld. This should equal (‘Total Payment Received’ minus ‘Total Amount Betted’) multiplied ‘Rate Used’%.`,
             `<ul>`,
            `<strong> Declaration submission</strong>`,
            `Once both the relevant annexures have been completed, validated and saved in the folder C:/RRA in the user’s local machine, the taxpayer can return to E-Tax to complete the declarations, see page 102 for more detail on selecting the relevant declarations.`,
           `The withholding taxes or gaming tax declaration forms require similar data to the annexures that have previously been completed. The important distinction is that in the withholding taxes or gaming tax declaration forms, the total combined values for all transactions during that tax period must be entered. Once all relevant white boxes have been entered, click ‘save’ to calculate the grey boxes automatically.`,
           `<blockquote>
           <strong> Example </strong>
          <p> A player, Mucyo, placed a bet of FRW 20,000 on a football game and lost. The company, Y, with which Mucyo placed the bet, is required to pay a gaming tax of FRW 20,000 * 40% = FRW 8,000.</p>
          </blockquote>`,
          `After saving the declaration form, upload the annexures and then compare with the declaration form.`,
           ` Once all the annexures and declaration values are equal, correct and certified, click to ‘Submit’ the declaration. After successfully submitting, this screen will load.`,
            `Click ‘View Acknowledgement Receipt’ to view the RRA reference number and the total tax due that are required for payment. See page 415 for more details on paying taxes. Remember that payment must also be made before the deadline to avoid penalties and fines.`,
            `After submitting the Gaming Tax declaration and viewing the acknowledgement receipt, repeat the above process for WOP-Gaming.`,
            `<blockquote>
           <strong> Example</strong></i>
            <p>A player, Mucyo, placed a bet of FRW 40,000 on a football game and won at odds of 1.6. The company, Y, with which Mucyo placed the bet, is required to pay Mucyo the winning amount of FRW 40,000 * 1.6 = FRW 64,000, minus the Winnings of Players (WOP) gaming tax. The WOP tax is calculated on the profit portion, i.e., (FRW 64,000 – FRW 40,000) * 25% = FRW 6,000. Therefore, Y shall remit FRW 59,000 (i.e., FRW 64,000 – FRW 6,000) to Mucyo and FRW 6,000 to the tax administration as WOP gaming tax.</p>
            </blockquote>`,
      

   ],
      },
    },
    {
      id: "gaming-taxes-penalties-and-fines",
      title: {
        en: "Gaming Taxes penalties and fines",
        fr: "Penalites et amendes sur les taxes de jeux",
        rw: "Ibihano n'amande ku misoro y'imikino",
      },
      content: {
        en: [
             `The penalties and fines for gaming taxes are similar to other domestic taxes,This includes penalties and fines for:`,
        `<ul>`,
            `  -          Late declaration.`,
             ` -          Late payment.`,
             ` -          Declaring less than the correct tax due.`,
             ` -          Paying less than the tax due declared.`,
              `It is important to note that these penalties apply separately to both Gaming Tax and Withholding Tax of 25% on Gambling Proceeds. Failure to declare or pay any one tax type will result in penalties and fines applying to only that particular tax type. Failure to declare or pay both tax types will result in penalties and fines applying to both tax types.`,
          `<ul>`,
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
