function welcome()
	{
		alert("Welcome to the Fan Down Taxi App");
		
		var audio = new Audio('audio/horn.mp3');
		audio.play();
	}
	
/* contact Form Validation */
function SubmitForm()
	{
		var FirstName = document.contact.fName;
		var LastName = document.contact.lName;
		var Address = document.contact.address;
		var Telephone = document.contact.telephone;
		var EmailAddress = document.contact.emailAddress;
		
		if(FirstName.value == "")
			{
				alert("Please Enter First Name!");
				FirstName.focus();
				return false;
			}
		if(LastName.value == "")
			{
				alert("Please Enter Last Name!");
				LastName.focus();
				return false;
			}
		if(Address.value == "")
			{
				alert("Please Enter Address!");
				Address.focus();
				return false;
			}
		if(Telephone.value == "")
			{
				alert("Please Enter Telephone Number!");
				Telephone.focus();
				return false;
			}
		if(EmailAddress.value == "")
			{
				alert("Please Enter Email Address!");
				EmailAddress.focus();
				return false;
			}
		else
			{
				alert("Form Successfully Submitted!");
				return true;
			}
	}
	
function OrderForm()
	{
		var Select = document.order.selectOption;
		var Name = document.order.name;
		var PAddress = document.order.pAddress;
		var DAddress = document.order.dAddress;
		var Telephone = document.order.telephone;
		var Picture = document.order.picture;
		
		if(Select.SelectedIndex == "0" )
			{
				alert("Please Choose a Vehicle!");
				Select.focus();
				return false;
			}
		if(Name.value == "")
			{
				alert("Please Enter Full Name!");
				Name.focus();
				return false;
			}
		if(PAddress.value == "")
			{
				alert("Please Enter Pick-Up Address!");
				PAddress.focus();
				return false;
			}
		if(DAddress.value == "")
			{
				alert("Please Enter Destination Address!");
				DAddress.focus();
				return false;
			}
		if(Telephone.value == "")
			{
				alert("Please Enter Telephone Number!");
				Telephone.focus();
				return false;
			}
		if(Picture.value == "")
			{
				alert("Please Add A Picture of Yourself!");
				Picture.focus();
				return false;
			}
		else
			{
				var audio = new Audio('audio/horn.mp3');
				audio.play();
				
				alert("Form Successfully Submitted!");
				return true;				
			}
	}
	
function logIn()
	{
		var UserName = document.LOGIN.uName;
		var Password = document.LOGIN.passWord;
		
		if(UserName.value == "Admin" && Password.value == "abc1234")
		{
			window.location="home.html";
		}
		else
		{
			
			alert("Username or Password is incorrect");
		}		
	}

function Redirect()
	{
		window.location="home.html";
	}