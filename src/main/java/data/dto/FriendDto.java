package data.dto;

import lombok.Data;
import org.apache.ibatis.type.Alias;

@Data
@Alias("FriendDto")
public class FriendDto {
    private int fnum;
    private int unum;
    private int funum;
    private int faccept;
}
