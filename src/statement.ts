import { MovieCode } from "./Movie";

export const statement = (customer: any, movies: any, categories: any, html: boolean): string => {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = html == true ? `<h1>Rental Record for <em>${customer.name}</em><\h1><ul>\n` : `Rental Record for ${customer.name}\n`;
  
  for (let r of customer.rentals) {
    let movie = movies[r.movieID];
	let category = categories[movie.code];
	
    let thisAmount = 0;
	
	if (movie.code == MovieCode.NEW) { 
	  thisAmount = r.days * 3;
	}
	else{
	  thisAmount = r.days > category.feeDay ? category.defaultAmount + ((r.days - category.feeDay) * category.feeRate) : category.defaultAmount;
	}

    frequentRenterPoints++;
    if (movie.code === MovieCode.NEW && r.days > 2) frequentRenterPoints++;
	
    result += html == true ? `<li>\t${movie.title}\t${thisAmount}</li>\n` : `\t${movie.title}\t${thisAmount}\n`;
    totalAmount += thisAmount;
  }
  result += html == true ? `</ul><p> Amount owed is <em> ${totalAmount}</em></p>\n` : `Amount owed is ${totalAmount}\n`;
  result += html == true ? `<p>You earned <em> ${frequentRenterPoints} </em> frequent renter points</p>\n` : `You earned ${frequentRenterPoints} frequent renter points\n`;
  
  return result;
};
