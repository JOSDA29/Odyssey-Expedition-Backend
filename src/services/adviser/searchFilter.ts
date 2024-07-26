import searchFilter from "../../controllers/user/adviser/searchFilter";
import searchFilterDTO from "../../DTO/searchFilterDTO";
import UserDto from "../../DTO/user/userDto";
import SearchFilterRepository from "../../repository/user/adviser/searchFilter";

class SearchFilter {
    static async searchFilter(searchFilterDTO: searchFilterDTO){
        const result = await SearchFilterRepository.searchFilter(searchFilterDTO);
        return result;
    }
}


export default SearchFilter;