const heading=React.createElement("div",{id:"main"},
  [  React.createElement("h1",{className:"heading"},"hii"),
            React.createElement("div",{id:"bi"},
                [React.createElement("h1",{className:"heading"},"hii"),
              React.createElement("div",{id:"ji"},
                React.createElement("h1",{className:"heading"},"heloo workd")
              )
                 ]
    )]
    )
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


 // div [ h1,div [h1,div [h1,div h1] ]

{/* <div>
  <h1>heelo</h1>
  <div>
    <h1>hii</h1>
    <div>
      <h1>heelo</h1>
      <div>
        <h1>heelo</h1>
      </div>
    </div>
  </div>
</div>; */}
