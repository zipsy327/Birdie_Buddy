package data.service;

import data.dto.RehugiDto;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface RehugiServiceInter {
    public void addComment(RehugiDto rhdto);
    public void addReply(RehugiDto rhdto);
    List<RehugiDto> getCommentsByHnum(int hnum);
    public List<RehugiDto> getAllCommentsWithReplies(@Param("hnum") int hnum);
    public void deleteCommentOrReply(int rhnum);
    public void deleteAllComments(@Param("hnum")int hnum);

}
