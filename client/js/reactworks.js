
class HeaderTop extends React.Component{
		render(){
			return <div className="container heading">
						      <p>Aşağıdaki boşluklara kişi isimlerini her biri bir satır olacak şekilde yaz.</p>
							  <p>Hazırla butonuna bas, yanda takımların düzenini gör.</p>
					 </div>;
		}
}

class InputGroups extends React.Component{

		constructor(props){
			super(props);
			this.state = {
				kaleciler:[],
				defanslar:[],
				ortasahalar:[],
				forvetArkasi:[],
				forvetler:[],
			activeButton: [
					"btn btn-danger btn-sm",
					"btn btn-success btn-sm",
					"btn btn-success btn-sm",
					"btn btn-success btn-sm",
					"btn btn-success btn-sm"
					],
					areaLengths:[
					4,
					4,
					4,
					4
					],
					jokerAreaDisp: "container jokerCont",
					orderState:0
			};
			
			this.setTactic  =  this.setTactic.bind(this);	
			this.hazirla = this.hazirla.bind(this);
		    this.handleChange = this.handleChange.bind(this);
		}
		
		handleChange(e) {
			var temp = this.karistir(e.target.value.split(/\n/));
			switch(e.target.id){
				case "inpGK":
					this.setState({
					kaleciler: temp}
					);
					break;
				case "inpDef":
					this.setState({
					defanslar: temp
					});
					break;
				case "inpMid":
					this.setState({
					ortasahalar: temp
					});
					break;
				case "inpAtMid":
					this.setState({
					forvetArkasi: temp
					});
					break;
				case "inpFor":
					this.setState({
					forvetler: temp
					});
					break;
				
			}
		}
		

		karistir (inp){
		 var j, x, i;
				for (i = inp.length; i; i--) {
					j = Math.floor(Math.random() * i);
					x = inp[i - 1];
					inp[i - 1] = inp[j];
					inp[j] = x;
				}
			return inp;
		
		}
		
		hazirla(){

		  var fieldOrder= [
                    [[170,32,this.state.kaleciler[0]],
                    [100,100,this.state.defanslar[0]], [240,100,this.state.defanslar[1]],
                    [60,180,this.state.ortasahalar[0]],  [280,180,this.state.ortasahalar[1]],
                    [100,260,this.state.forvetler[0]], [240,260,this.state.forvetler[1]],
                    [100,370,this.state.forvetler[2]], [240,370,this.state.forvetler[3]],
                    [60,450,this.state.ortasahalar[2]],  [280,450,this.state.ortasahalar[3]],
                    [100,530,this.state.defanslar[2]], [240,530,this.state.defanslar[3]],
                    [170,608,this.state.kaleciler[1]]
                    ],
                    [[170,32,this.state.kaleciler[0]],
                    [60,100,this.state.defanslar[0]], [170,100,this.state.defanslar[1]], [280,100,this.state.defanslar[2]],  
                    [100,180,this.state.ortasahalar[0]],  [240,180,this.state.ortasahalar[1]], 
                    [170,260,this.state.forvetler[0]],
                    [170,370,this.state.forvetler[1]], 
                    [240,450,this.state.ortasahalar[2]],[60,450,this.state.ortasahalar[3]], 
                    [60,530,this.state.defanslar[3]], [170,530,this.state.defanslar[4]], [280,530,this.state.defanslar[5]],
                    [170,608,this.state.kaleciler[1]]
                    ],
                    [[170,32,this.state.kaleciler[0]],
                    [100,100,this.state.defanslar[0]], [240,100,this.state.defanslar[1]],
                    [60,180,this.state.ortasahalar[0]],  [170,180,this.state.ortasahalar[1]], [280,180,this.state.ortasahalar[2]],
                    [170,260,this.state.forvetler[0]],
                    [170,370,this.state.forvetler[1]], 
                    [60,450,this.state.ortasahalar[3]],  [170,450,this.state.ortasahalar[4]],[280,450,this.state.ortasahalar[5]],
                    [100,530,this.state.defanslar[2]], [240,530,this.state.defanslar[3]],
                    [170,608,this.state.kaleciler[1]]
                    ]];
			if(this.state.orderState >2)
    fieldOrder.push(
                    [[170,32,this.state.kaleciler[0]],
                    [100,100,this.state.defanslar[0]], [240,100,this.state.defanslar[1]],
                    [60,180,this.state.ortasahalar[0]],  [280,180,this.state.ortasahalar[1]], 
                    [190,220,this.state.forvetArkasi[0]],
                    [170,280,this.state.forvetler[0]],
                    [170,350,this.state.forvetler[1]],
                    [190,410,this.state.forvetArkasi[1]],
                    [60,460,this.state.ortasahalar[2]],  [280,450,this.state.ortasahalar[3]],
                    [100,530,this.state.defanslar[2]], [240,530,this.state.defanslar[3]],
                    [170,608,this.state.kaleciler[1]]
                    ],
                    [[170,32,this.state.kaleciler[0]],
                    [60,100,this.state.defanslar[0]], [170,100,this.state.defanslar[1]], [280,100,this.state.defanslar[2]],  
                    [140,180,this.state.ortasahalar[0]],
                    [200,220,this.state.forvetArkasi[0]],
                    [170,280,this.state.forvetler[0]],
                    [170,350,this.state.forvetler[1]],
                    [200,410,this.state.forvetArkasi[1]],
                    [140,450,this.state.ortasahalar[1]],
                    [60,530,this.state.defanslar[3]], [170,530,this.state.defanslar[4]], [280,530,this.state.defanslar[5]],
                    [170,608,this.state.kaleciler[1]]
                    ]
                    );		
					
					
					
		var svg = d3.select("#svcField").append("g");		
		var circle = svg.selectAll("circle")
			.data(fieldOrder[this.state.orderState]);
		var text = svg.selectAll("text")
			.data(fieldOrder[this.state.orderState]);

			   circle.enter().append("circle")
					.attr("cy", function(d, i) {return d[0]; })
					.attr("cx", function(d, i) {return d[1]; })
					.attr("r", function(d) { return 10; })
					.style("fill",function(d,i){return (i>6)?"red":"blue";});

				text.enter().append("text")
					.attr("y", function(d, i) {return d[0]-10; })
					.attr("x", function(d, i) {return d[1]-30; })
					.style("font-size", "16px")
					.style("fill",function(d,i){return (i>6)?"#fffffa":"#afffff";})
					.text(function(d) {
						  return d[2];
						}); 
		 d3.selectAll("button").attr("disabled","true");

		}

		setTactic(input){
			switch(input){
				case "222":
					this.setState(()=>({
						activeButton: [
							"btn btn-danger btn-sm",
							"btn btn-success btn-sm",
							"btn btn-success btn-sm",
							"btn btn-success btn-sm",
							"btn btn-success btn-sm"
							],
						areaLengths:[
							4,
							4,
							4,
							4
						],
						jokerAreaDisp:"container jokerCont",
						orderState:0
						
		
					}));
				break;
				case "321":
					this.setState(()=>({
						activeButton: [
							"btn btn-success btn-sm",
							"btn btn-danger btn-sm",
							"btn btn-success btn-sm",
							"btn btn-success btn-sm",
							"btn btn-success btn-sm"
							],
						areaLengths:[
							6,
							4,
							2,
							4
						],
					jokerAreaDisp:"container jokerCont",
						orderState:1
						
					}));
				break;
				case "231":
					this.setState(()=>({
						activeButton: [
							"btn btn-success btn-sm",
							"btn btn-success btn-sm",
							"btn btn-danger btn-sm",
							"btn btn-success btn-sm",
							"btn btn-success btn-sm",
							"btn btn-success btn-sm"
							],
						areaLengths:[
							4,
							6,
							2,
							4
						],
					jokerAreaDisp:"container jokerCont",
						orderState:2				
						
						
					}));
				break;
				case "2211":
					this.setState(()=>({
							activeButton: [
							"btn btn-success btn-sm",
							"btn btn-success btn-sm",
							"btn btn-success btn-sm",
							"btn btn-danger btn-sm",
							"btn btn-success btn-sm"
							],
							areaLengths:[
							4,
							4,
							2,
							2
						],
					jokerAreaDisp:"container",
						orderState:3						
					}));
				break;
				case "3111":
					this.setState(()=>({
							activeButton: [
							"btn btn-success btn-sm",
							"btn btn-success btn-sm",
							"btn btn-success btn-sm",
							"btn btn-success btn-sm",
							"btn btn-danger btn-sm"
							],
							areaLengths:[
							6,
							2,
							2,
							2
						],
					jokerAreaDisp:"container",
					orderState:4						
					}));
				break;
			
			}
		}

		render(){		
		return <div className="col col-sm-4">
				<div className="row">
				<div className="col col-sm-3" >
						  <div className="btn-group-vertical" data-toggle="buttons">
								<button className={this.state.activeButton[0]}  onClick={ () => this.setTactic("222" )}>2-2-2</button>
								<button className={this.state.activeButton[1]}  onClick={ () => this.setTactic("321" )}>3-2-1</button>
								<button className={this.state.activeButton[2]}  onClick={ () => this.setTactic("231" )}>2-3-1</button>
								<button className={this.state.activeButton[3]}  onClick={ () => this.setTactic("2211" )}>2-2-1-1</button>
								<button className={this.state.activeButton[4]}  onClick={ () => this.setTactic("3111" )}>3-1-1-1</button>						
								<button id="btnMix" className="btn btn-sm" onClick={ () => this.hazirla() }>Hazırla</button>
						  </div>
						 	
					</div>
					<div className="col col-sm-9">
						  <div className="container">
								<div>Kaleciler <span id="spGK">(2 kişi)</span>:</div><textarea className="form-control" onChange={this.handleChange}  id="inpGK" rows="2" required></textarea>
						  </div>
						  <div className="container">
								<div>Defanslar <span  id="spDef">({this.state.areaLengths[0]} kişi)</span>:</div><textarea className="form-control" onChange={this.handleChange}  id="inpDef" rows={this.state.areaLengths[0]} required></textarea>
						 </div>
						 <div className="container">
								<div>Orta Sahalar <span id="spMid">({this.state.areaLengths[1]} kişi)</span>:</div><textarea className="form-control" onChange={this.handleChange} id="inpMid" rows={this.state.areaLengths[1]}  required></textarea>
						 </div>
						 <div className={this.state.jokerAreaDisp}>
								<div>Forvet Arkası<span id="spMid">({this.state.areaLengths[3]} kişi)</span>:</div><textarea className="form-control" onChange={this.handleChange}  id="inpAtMid" rows={this.state.areaLengths[3]}  required></textarea>
						 </div>  
						<div className="container">
								<div>Forvetler <span id="spFor">({this.state.areaLengths[2]} kişi)</span>:</div><textarea className="form-control" onChange={this.handleChange}  id="inpFor" rows={this.state.areaLengths[2]}  required></textarea>
						</div>
					</div>
				</div>
			   </div>;		
		
		}	

}

class OutputGroups extends React.Component{
	
	render(){
		return <div className="col col-sm-8" >
					<svg id="svcField"  viewBox="0 0 640 360" >
						<image x="0" y="0" height="360" width="640" role="image" xlinkHref="img/field.jpg" />
                    </svg>
				</div>;
	}
}

class BodyMid extends React.Component{

	render(){	
		return   <div className="container-fluid">
							<div className="row">
							<InputGroups />
							<OutputGroups />							
							</div>
					</div>;
	}
}

class  App extends React.Component{

	render(){
		return <div>
						<HeaderTop />
						<BodyMid />
				 </div>;
	
	}

}

ReactDOM.render(<App />, document.getElementById("app") );

