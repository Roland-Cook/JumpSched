

function Prices(){
    return(
        <div className="prices-table-container">
        <h1>Here are our prices</h1>
        <div className="prices-container">
            Gifting someone a skydive is the perfect gift<br/>
            for any occasion! Call now for the best retail<br/> prices in Colorado!
        </div>
        <prices-table>
            <table>
            <thead>
                <tr>
                    <th>Activites</th>
                    <th cols="2">Prices</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>Tandem Skydive, you are attached to an instructor</td>
                <td>$230</td>
            </tr>
            <tr>
                <td>Hop and pops for licensed Skydivers(funjumpers)</td>
                <td>$22</td>
            </tr>
            <tr>
                <td>Full altitude jump for licensed skydivers</td>
                <td>$32</td>
            </tr>
            <tr>
                <td>1st jump course,(Learn to jump solo)</td>
                <td>$260</td>
            </tr>
            <tr>
                <td>Photos and videos for tandem jumps</td>
                <td>$75 videos & photos</td>
            </tr>
            <tr>
                <td>Tandem Progression to solo jumper</td>
                <td>$349</td>
            </tr>
            <tr>
                <td>Rental Gear for licensed Jumpers</td>
                <td>$20 each jumps</td>
            </tr>
            <tr>
                <td>Get your A-license, 25 jumps and training, all inclusive</td>
                <td>$3400</td>
            </tr>
            </tbody>
            </table>
        </prices-table>
    </div>
    )
}
export default Prices;
